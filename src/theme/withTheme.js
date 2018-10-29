import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './default';

function withTheme(WrappedComponent, theme = defaultTheme) {
	class WithTheme extends Component {
		render() {
			return (
				<ThemeProvider theme={theme}>
					<WrappedComponent {...this.props} />
				</ThemeProvider>
			);
		}
	}

	const name = WrappedComponent.displayName || WrappedComponent.name;
	WithTheme.displayName = `WithTheme(${name})`;

	return hoistNonReactStatic(WithTheme, WrappedComponent);
}

export default withTheme;
