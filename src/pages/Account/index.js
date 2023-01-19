import Profile from "./Profile";
import Settings from "./Settings";
const routes = [
	{
		path: "profile",
		element: <Profile />,
	},
	{
		path: "profile/settings",
		element: <Settings />,
	},
];
export default routes;
