import React from 'react'; // eslint-disable-line no-unused-vars
import { createStackNavigator } from 'react-navigation';
import navigationOptions, { cardStyle } from 'navigation/navigationOptions'
import Home from 'screens/Home';
import Greeting from 'screens/Greeting';

export const MainStack = createStackNavigator({
	Home:  {
		screen: Home,
	},
	Greeting: {
		screen: Greeting,
	}
}, {
	initialRouteName: 'Home',
	cardStyle,
	navigationOptions
});

/**
 * Root
 */
export const RootStack = createStackNavigator({
	Main: {
		screen: MainStack,
	},
}, {
	mode: 'modal',
	headerMode: 'none',
});
