import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NavigationHandler from 'navigation/navigationHandler';

export default class Home extends Component {
	static navigationOptions = () => {
		return ({
			title: 'Home',
			headerRight: (
				<Button
					onPress={() => alert('This is a button!')}
					title="Info"
					color="#fff"
				/>
			),
		})
	}

	onPress = () => {
		NavigationHandler.dispatch(
			NavigationHandler.navigate({ routeName: 'Greeting' })
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Button
					onPress={this.onPress}
					title='Go to Greeting'
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
