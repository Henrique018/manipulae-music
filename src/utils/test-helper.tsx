/* custom render from redux and RTL docs: 
https://redux.js.org/usage/writing-tests#connected-components,
https://testing-library.com/docs/react-testing-library/setup/
*/
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { ComponentType, ReactElement } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import songsReducer from 'redux/songsSlicer';

type AllTheProvidersProps = {
	children: ReactElement;
};

function render(
	ui: ReactElement,
	{
		store = configureStore({
			reducer: { songs: songsReducer }
		}),
		route = '/',
		...renderOptions
	} = {}
) {
	const AllTheProviders = ({
		children
	}: AllTheProvidersProps): ReactElement => {
		window.history.pushState({}, 'Test page', route);
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>{children}</BrowserRouter>
				</ThemeProvider>
			</Provider>
		);
	};
	return rtlRender(ui, {
		wrapper: AllTheProviders as ComponentType,
		...renderOptions
	});
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
