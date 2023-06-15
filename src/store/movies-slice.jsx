import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	recommends: [],
	newDisney: [],
	originals: [],
	trending: [],
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setupMovies: (state, action) => {
			const { recommends, newDisney, originals, trending } =
				action.payload;

			state.recommends = recommends;
			state.newDisney = newDisney;
			state.originals = originals;
			state.trending = trending;
		},
	},
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
