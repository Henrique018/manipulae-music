import { screen, render } from '@testing-library/react';

import Header from '.';

describe('<Header / >', () => {
	it('should render a logo, an input and favorites ', () => {
		render(<Header />);

		expect(screen.getByTitle(/manipulaê music/i)).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText(/Search for an artist, song or podcast/i)
		).toBeInTheDocument();

		expect(screen.getByTitle(/favorites/i)).toBeInTheDocument();
	});
});
