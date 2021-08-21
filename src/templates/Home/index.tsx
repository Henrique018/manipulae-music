import { useEffect, useState } from 'react';

import Header from 'components/Header';
import CardList from 'components/CardList';

import { api } from 'services/api';
import mapToSongCard, { ApiDataProps } from 'utils/mapper';

const Index = () => {
	const [songs, setSongs] = useState<ApiDataProps | undefined>();

	useEffect(() => {
		async function getApiData() {
			const { data } = await api.get('/chart');

			setSongs(data.tracks);
		}

		getApiData();
	}, []);

	return (
		<>
			<Header />
			<CardList cards={mapToSongCard(songs)} />
		</>
	);
};

export default Index;
