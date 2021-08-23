import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import CardList from 'components/CardList';

import { RootState } from 'redux/store';
import { api } from 'services/api';
import mapToSongCard, { ApiDataProps } from 'utils/mapper';

const Index = () => {
	const [trendingSongs, setTrendingSongs] = useState<
		ApiDataProps | undefined
	>();

	const searchedSongs = useSelector(
		(state: RootState) => state.songs.searchedSongs
	);

	useEffect(() => {
		async function getApiData() {
			const { data } = await api.get('/chart');

			setTrendingSongs(data.tracks);
		}

		getApiData();
	}, []);

	return (
		<>
			<Header />
			{searchedSongs.length ? (
				<CardList cards={searchedSongs} />
			) : (
				trendingSongs && <CardList cards={mapToSongCard(trendingSongs)} />
			)}
		</>
	);
};

export default Index;
