import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import moviesReducer from './movies-slice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		movies: moviesReducer,
	},
});
