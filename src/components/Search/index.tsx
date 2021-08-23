import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search as SearchIcon } from '@styled-icons/boxicons-regular';

import { AppDispatch } from 'redux/store';
import { searchedSong } from 'redux/songsSlicer';
import { api } from 'services/api';

import secsToMins from 'utils/secsToMins';

import * as S from './styles';

type searchResponse = {
	data: [
		{
			id: number;
			title: string;
			link: string;
			duration: number;
			preview: string;
			artist: {
				name: string;
			};
			album: {
				cover_medium: string;
			};
			type: string;
		}
	];
};

const Search = () => {
	const dispatch: AppDispatch = useDispatch();
	const [value, setValue] = useState('');

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const { data } = await api.get<searchResponse>('/search', {
			params: {
				q: value.replace(' ', '-')
			}
		});

		const searchedTracks = data.data
			.filter((d) => d.type === 'track')
			.map((track) => ({
				id: track.id,
				title: track.title,
				artistName: track.artist.name,
				albumCover: track.album.cover_medium,
				duration: secsToMins(track.duration),
				link: track.link,
				preview: track.preview
			}));

		dispatch(searchedSong(searchedTracks));
	};

	return (
		<S.SearchWrapper>
			<S.Input
				placeholder="Search for an artist, song or podcast"
				value={value}
				onChange={handleValueChange}
				type="search"
			/>
			<S.ButtonSearch type="submit" onClick={handleSubmit}>
				<SearchIcon size={34} color="#fff" title="search" />
			</S.ButtonSearch>
		</S.SearchWrapper>
	);
};

export default Search;
