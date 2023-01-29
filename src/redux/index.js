import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counter from "./counter";
import settings from "./settings";
import users from "./users";
const env = process.env.NODE_ENV === "development";
const store = configureStore({
	reducer: {
		counter,
		settings,
		users,
	},
	middleware: getDefaultMiddleware => {
		if (env) {
			return getDefaultMiddleware({ serializableCheck: false }).concat(
				logger
			);
		} else {
			return getDefaultMiddleware({ serializableCheck: false });
		}
	},
	devTools: env,
});
export default store;
