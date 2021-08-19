import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-helper';
import CardList from '.';

const mock = {
	title: 'Feel Good Inc.',
	artistName: 'Gorillaz',
	duration: 300,
	albumCover:
		'https://cdns-images.dzcdn.net/images/cover/8dd837db7a1c6acf7acb20e26c0452c3/250x250-000000-80-0-0.jpg',
	link: 'https://www.deezer.com/track/3129407'
};

describe('<CardList>', () => {
	it('should render correctly', () => {
		renderWithProviders(<CardList cards={[mock, mock, mock]} />);

		expect(screen.getAllByText(/Gorillaz/i)).toHaveLength(3);
	});
});
