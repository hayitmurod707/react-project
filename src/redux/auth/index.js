import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	auth: "LOADING",
};
// LOADING
// AUTHENTICATED
// UNAUTHENTICATED
// SERVER_ERROR
// NETWORK_ERROR
export const users = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth: (state, { payload }) => {
			state.auth = payload;
		},
	},
});
export const { setAuth } = users.actions;
export default users.reducer;
