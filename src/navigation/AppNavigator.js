import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { RootStack } from 'navigation/routes';
import NavigationHandler from 'navigation/navigationHandler';

class AppNavigator extends Component {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
	}

	shouldComponentUpdate = () => false;

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
	}

	onBackPress = () => {
		NavigationHandler.dispatch(NavigationHandler.back());
		return true;
	};

	setTopLeverHandlers = (navigatorRef) => {
		NavigationHandler.setTopLevelNavigator(navigatorRef);
		NavigationHandler.setTopLevelReduxDispatch(this.props.dispatch);
	}

	render() {
		return (
			<RootStack ref={this.setTopLeverHandlers} />
		);
	}
}

export default connect(null, dispatch => ({ dispatch }))(AppNavigator);
