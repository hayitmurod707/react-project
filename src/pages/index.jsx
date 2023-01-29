import { useRoutes } from "react-router-dom";
import Account from "./Account";
import Auth from "./Auth";
import Home from "./Home";
import NotFound from "./NotFound";
import Public from "./Public";
const Pages = () => {
	const routes = useRoutes([
		...Account,
		...Auth,
		...Home,
		...NotFound,
		...Public,
	]);
	return routes;
};
export default Pages;
