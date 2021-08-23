import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songsSlicer';

const store = configureStore({
	reducer: {
		songs: songsReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
