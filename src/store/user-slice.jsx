import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
	photo: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUserState: (state, action) => {},
		logoutUserState: (state) => {},
	},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
