import { applyMiddleware, createStore } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Actions } from 'state/modules/app';
import reducers from 'state/modules/reducers';
import rootSaga from 'state/sagas';
import config from 'config';

function createPersistor(store) {
	const init = () => { store.dispatch(Actions.init()); };
	const persistor = persistStore(store, null, init);
	return persistor;
}

/**
 * Redux Store configurator
 */
export default function configureStore(initialState = {}) {
	const persistedReducers = persistCombineReducers(config.persist, reducers);

	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];
	const enhancers = [applyMiddleware(...middleware)];
	const appropriateCompose = composeWithDevTools({ name: 'React Native App', realtime: true });

	const store = createStore(persistedReducers, initialState, appropriateCompose(...enhancers));

	const persistor = createPersistor(store);

	sagaMiddleware.run(rootSaga);

	store.persistor = persistor;

	return store;
}
