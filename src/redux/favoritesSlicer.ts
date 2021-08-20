import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongCardProps } from 'components/SongCard';

type favoriteTrackId = number;

type initialFavState = {
	favorites: favoriteTrackId[] | [];
};

const initialState: initialFavState = {
	favorites: []
};

const favoritesSlicer = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFav: (draft, action: PayloadAction<Pick<SongCardProps, 'id'>>) => {
			const { id } = action.payload;

			const song = draft.favorites.find((trackId) => trackId === id);

			if (id && !song) {
				draft.favorites = [...draft.favorites, id];
			}
		},
		removeFromFav: (
			draft,
			action: PayloadAction<Pick<SongCardProps, 'id'>>
		) => {
			const { id } = action.payload;

			const song = draft.favorites.find((trackId) => trackId === id);
			if (song) {
				draft.favorites = draft.favorites.filter((trackId) => trackId !== id);
			}
		}
	}
});

export const { addToFav, removeFromFav } = favoritesSlicer.actions;

export default favoritesSlicer.reducer;
