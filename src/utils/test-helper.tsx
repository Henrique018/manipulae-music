import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';

import theme from 'styles/theme';

export const renderWithProviders = (
	ui: ReactElement,
	route = '/'
): RenderResult => {
	window.history.pushState({}, 'Test page', route);
	return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, {
		wrapper: BrowserRouter
	});
};
