import NotFound from "./NotFound";
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
	{
		path: "profile/*",
		element: <NotFound />,
	},
];
export default routes;
