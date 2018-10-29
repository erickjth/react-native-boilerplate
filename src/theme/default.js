/**
 * Theme definition file
 * Colors
 * Fonts
 * Metrics
 */
export const brand = {
	primary: '#6a1b9a',
	primaryLight: '#9c4dcc',
	primaryDark: '#38006b',

	secondary: '#1565c0',
	secondaryLight: '#5e92f3',
	secondaryDark: '#003c8f',
};

export const grayScale = {
	black: '#212121',
	white: '#FFFFFF',
};

export const fontSizes = [13, 16, 20, 24, 28, 32, 40, 56, 72, 88, 96];

export const icons = {
	tiny: 15,
	small: 20,
	medium: 25,
	large: 35,
}

export const images = {
	tiny: 15,
	small: 20,
	medium: 40,
	large: 50,
}

export default {
	colors: {
		...brand,
		...grayScale,
	},
	fontSizes,
	icons,
	images,
}
