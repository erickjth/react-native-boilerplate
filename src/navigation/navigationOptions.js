import Theme from 'theme/default';

const navigationOptions = ({ navigation }) => {
	return {
		headerStyle: {
			backgroundColor: Theme.colors.primary,
		},
		headerTitleStyle: {
			color: '#fff',
			fontWeight: 'normal',
		},
		headerBackTitle: null,
		headerTintColor: '#fff',
		headerForceInset: {
			bottom: 'never',
			top: 'never',
			left: 'never',
				right: 'never',
		},
	};

};

export const cardStyle = { shadowOpacity: 0 };

export default navigationOptions;
