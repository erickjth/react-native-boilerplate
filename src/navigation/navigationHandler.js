import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;
function setTopLevelNavigator(navigatorRef, ) {
	_navigator = navigatorRef;
}

let _reduxDispatch;
function setTopLevelReduxDispatch(reduxDispatch) {
	_reduxDispatch = reduxDispatch;
}

function dispatch(action) {
	if (!action.type) return;

	if (!action.type.startsWith('Navigation') && _reduxDispatch) {
		_reduxDispatch(action);
	} else if (_navigator) {
		_navigator.dispatch(action);
	}
}

export default {
	setTopLevelNavigator,
	setTopLevelReduxDispatch,
	dispatch,
	...NavigationActions,
	...StackActions,
};
