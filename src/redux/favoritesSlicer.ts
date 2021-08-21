import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongCardProps } from 'components/SongCard';

type initialFavState = {
	favorites: SongCardProps[] | [];
};

const initialState: initialFavState = {
	favorites: []
};

const favoritesSlicer = createSlice({
	name: 'favorites',
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
		}
	}
});

export const { addToFav, removeFromFav } = favoritesSlicer.actions;

export default favoritesSlicer.reducer;
