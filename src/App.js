import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from 'react-native';
import { withTheme } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import StatusBar from 'components/StatusBar';
import AppNavigator from 'navigation/AppNavigator';

class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	shouldComponentUpdate = () => false;

	render() {
		const { theme } = this.props;

		return (
			<React.Fragment>
				<SafeAreaView
					style={[
						styles.safeAreaView,
						{ backgroundColor: theme.colors.primary },
					]}
				>
					<View style={styles.container}>
						<StatusBar />
						<AppNavigator />
					</View>
				</SafeAreaView>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				/>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
});

export default withTheme(App);
