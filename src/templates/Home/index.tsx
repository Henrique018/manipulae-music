import Header from 'components/Header';
import CardList from 'components/CardList';

const Index = () => {
	return (
		<>
			<Header />
			<CardList
				cards={[
					{
						id: 1,
						title: 'Feel Good Inc.',
						artistName: 'Gorillaz',
						duration: 300,
						albumCover:
							'https://cdns-images.dzcdn.net/images/cover/8dd837db7a1c6acf7acb20e26c0452c3/250x250-000000-80-0-0.jpg',
						link: 'https://www.deezer.com/track/3129407'
					},
					{
						id: 2,
						title: 'Feel Good Inc.',
						artistName: 'Gorillaz',
						duration: 300,
						albumCover:
							'https://cdns-images.dzcdn.net/images/cover/8dd837db7a1c6acf7acb20e26c0452c3/250x250-000000-80-0-0.jpg',
						link: 'https://www.deezer.com/track/3129407'
					}
				]}
			/>
		</>
	);
};

export default Index;
