import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
	photo: null,
	loggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUserState: (state, action) => {
			const { name, email, photo } = action.payload;
			state.name = name;
			state.email = email;
			state.photo = photo;
			state.loggedIn = true;
		},
		logoutUserState: (state) => {
			state.name = null;
			state.email = null;
			state.photo = null;
			state.loggedIn = false;
		},
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
