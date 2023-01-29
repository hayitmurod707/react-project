import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	language: "uz",
	languages: ["uz", "ru", "en"],
	notification: true,
	sound: true,
	theme: "light",
	themes: ["light", "dark", "auto"],
};
export const users = createSlice({
	name: "settings",
	initialState,
	reducers: {
		changeTheme: (state, { payload }) => {
			state.theme = payload;
		},
		changeNotification: (state, { payload }) => {
			state.notification = payload;
		},
		changeLanguage: (state, { payload }) => {
			state.language = payload;
		},
		changeSound: (state, { payload }) => {
			state.sound = payload;
		},
	},
});
export const { changeTheme, changeNotification, changeLanguage, changeSound } =
	users.actions;
export default users.reducer;
