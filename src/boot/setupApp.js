import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import withTheme from 'theme/withTheme';
import configureStore from 'state/configureStore';
const store = configureStore();

export default function setupApp(Application) {
	class RootApp extends Component {
		render() {
			return (
				<Provider store={store}>
					<PersistGate persistor={store.persistor} >
						<Application />
					</PersistGate>
				</Provider>
			);
		}
	}

	return withTheme(RootApp);
}


