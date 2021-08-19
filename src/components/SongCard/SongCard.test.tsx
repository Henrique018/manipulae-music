import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from 'utils/test-helper';
import SongCard, { SongCardProps } from '.';

const mock = {
	title: 'Feel Good Inc.',
	artistName: 'Gorillaz',
	duration: 300,
	albumCover:
		'https://cdns-images.dzcdn.net/images/cover/8dd837db7a1c6acf7acb20e26c0452c3/250x250-000000-80-0-0.jpg',
	link: 'https://www.deezer.com/track/3129407',
	favorite: false
} as SongCardProps;

describe('<SongCard>', () => {
	it('should have img, title, artist, play, external link and favorite', () => {
		const { container } = renderWithProviders(<SongCard {...mock} />);

		expect(screen.getByAltText(/gorillaz's album cover/i)).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /Feel Good Inc/i })
		).toBeInTheDocument();

		expect(screen.getByText(/Gorillaz/i)).toBeInTheDocument();
		expect(screen.getByText(/300/i)).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: /listen the preview/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: /listen on deezer/i })
		).toBeInTheDocument();

		expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should call onFav when user clicks', () => {
		const onFav = jest.fn();
		renderWithProviders(<SongCard onFav={onFav} {...mock} />);

		const favBtn = screen.getByLabelText(/add to favorites/i);

		userEvent.click(favBtn);

		expect(onFav).toBeCalled();
	});

	it('should render a filled star if its a favorite song', () => {
		renderWithProviders(<SongCard {...mock} favorite />);

		expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument();
	});
});
