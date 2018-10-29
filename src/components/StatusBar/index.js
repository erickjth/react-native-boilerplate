import React, { Component } from 'react';
import { Platform, StatusBar as NativeStatusBar, View } from 'react-native';
import { withTheme } from 'styled-components';

const IOS_NAV_BAR_HEIGHT = 44;
const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_NAV_BAR_HEIGHT = 30;
const ANDROID_STATUS_BAR_HEIGHT = NativeStatusBar.currentHeight || 24;

const statusBarHeight = Platform.OS === 'ios' ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT;

const statusBarConfig = {
	animated: true,
	hidden: false,
	showHideTransition: 'fade',
	barStyle: 'light-content',
	...Platform.select({
		android: {
			backgroundColor: 'rgba(0, 0, 0, 0.2)',
			translucent: true,
		},
	}),
};

class StatusBar extends Component {
	render() {
		const { theme } = this.props;

		return (
			<View style={{
				...Platform.select({
					android: {
						backgroundColor: theme.colors.primary,
						height: statusBarHeight,
					},
				}),
			}}>
				<NativeStatusBar {...statusBarConfig} />
			</View>
		);
	}
}

export default withTheme(StatusBar);
