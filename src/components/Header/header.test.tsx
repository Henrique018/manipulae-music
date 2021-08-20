import { render, screen } from 'utils/test-helper';

import Header from '.';

describe('<Header / >', () => {
	it('should render a logo, an input and favorites ', () => {
		render(<Header />);

		expect(
			screen.getByRole('heading', { name: /manipulaê music/i })
		).toBeInTheDocument();

		expect(
			screen.getByPlaceholderText(/Search for an artist, song or podcast/i)
		).toBeInTheDocument();

		expect(screen.getByText(/favorites/i)).toBeInTheDocument();
	});
});
