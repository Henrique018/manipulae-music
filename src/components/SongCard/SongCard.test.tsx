import { render, screen } from 'utils/test-helper';
import SongCard, { SongCardProps } from '.';

const mock = {
	id: 1,
	title: 'Feel Good Inc.',
	artistName: 'Gorillaz',
	duration: '3:00',
	albumCover:
		'https://cdns-images.dzcdn.net/images/cover/8dd837db7a1c6acf7acb20e26c0452c3/250x250-000000-80-0-0.jpg',
	link: 'https://www.deezer.com/track/3129407',
	preview: 'songpreview',
	favorite: false
} as SongCardProps;

describe('<SongCard>', () => {
	it('should have img, title, artist, play, external link and favorite', () => {
		const { container } = render(<SongCard {...mock} />);

		expect(screen.getByAltText(/gorillaz's album cover/i)).toBeInTheDocument();

		expect(
			screen.getByRole('heading', { name: /Feel Good Inc/i })
		).toBeInTheDocument();

		expect(screen.getByText(/Gorillaz/i)).toBeInTheDocument();
		expect(screen.getByText(/3:00/i)).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: /listen song preview/i })
		).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: /listen on deezer/i })
		).toBeInTheDocument();

		expect(screen.getByLabelText(/add to favorites/i)).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render a filled star if its a favorite song', () => {
		render(<SongCard {...mock} favorite />);

		expect(screen.getByLabelText(/remove from favorites/i)).toBeInTheDocument();
	});
});
