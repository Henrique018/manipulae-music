import { useSelector } from 'react-redux';

import Header from 'components/Header';
import CardList from 'components/CardList';

import { RootState } from 'redux/store';

const Favorites = () => {
	const favoriteSongs = useSelector(
		(state: RootState) => state.songs.favorites
	);

	return (
		<>
			<Header />
			Your favorite songs
			<CardList cards={favoriteSongs} />
		</>
	);
};

export default Favorites;
