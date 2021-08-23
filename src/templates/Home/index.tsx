import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DownArrow } from '@styled-icons/boxicons-regular/DownArrow';

import Header from 'components/Header';
import CardList from 'components/CardList';

import { RootState } from 'redux/store';
import { api } from 'services/api';
import mapToSongCard, { ApiDataProps } from 'utils/mapper';

import * as S from './styles';

const Index = () => {
	const [trendingSongs, setTrendingSongs] = useState<
		ApiDataProps | undefined
	>();

	const searchedSongs = useSelector(
		(state: RootState) => state.songs.searchedSongs
	);

	useEffect(() => {
		async function getApiData() {
			const { data } = await api.get('/chart', {
				params: {
					index: 0,
					limit: 10
				}
			});

			setTrendingSongs(data.tracks);
		}
		getApiData();
	}, []);

	const fetchMore = async () => {
		const start = 0;
		const limit = 10;

		const { data: moreData } = await api.get('/chart', {
			params: {
				index: start + limit,
				limit: limit
			}
		});

		setTrendingSongs(moreData.tracks);
	};

	return (
		<S.Wrapper>
			<Header showFav showSearch />
			{searchedSongs.length ? (
				<CardList cards={searchedSongs} />
			) : (
				trendingSongs && <CardList cards={mapToSongCard(trendingSongs)} />
			)}
			<S.LoadMore onClick={fetchMore}>
				<DownArrow size={32} color="#E94560" />
				Load more
			</S.LoadMore>
		</S.Wrapper>
	);
};

export default Index;
