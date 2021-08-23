import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongCardProps } from 'components/SongCard';

type initialState = {
	favorites: SongCardProps[] | [];
	searchedSongs: SongCardProps[] | [];
};

const initialState: initialState = {
	favorites: [],
	searchedSongs: []
};

const favoritesSlicer = createSlice({
	name: 'songs',
	initialState,
	reducers: {
		addToFav: (draft, action: PayloadAction<SongCardProps>) => {
			const { id } = action.payload;

			const song = draft.favorites.find((track) => track.id === id);

			if (id && !song) {
				draft.favorites = [...draft.favorites, action.payload];
			}
		},
		removeFromFav: (
			draft,
			action: PayloadAction<Pick<SongCardProps, 'id'>>
		) => {
			const { id } = action.payload;

			const song = draft.favorites.find((track) => track.id === id);
			if (song) {
				draft.favorites = draft.favorites.filter((track) => track.id !== id);
			}
		},
		searchedSong: (draft, action: PayloadAction<SongCardProps[]>) => {
			if (action.payload) draft.searchedSongs = action.payload;
		}
	}
});

export const { addToFav, removeFromFav, searchedSong } =
	favoritesSlicer.actions;

export default favoritesSlicer.reducer;
