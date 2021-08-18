import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-helper';

import Header from '.';

describe('<Header / >', () => {
	it('should render a logo, an input and favorites ', () => {
		renderWithProviders(<Header />);

		expect(
			screen.getByRole('heading', { name: /manipulaê music/i })
		).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText(/Search for an artist, song or podcast/i)
		).toBeInTheDocument();

		expect(screen.getByText(/favorites/i)).toBeInTheDocument();
	});
});
