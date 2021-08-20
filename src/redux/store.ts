import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlicer';

const store = configureStore({
	reducer: {
		favorites: favoritesReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
