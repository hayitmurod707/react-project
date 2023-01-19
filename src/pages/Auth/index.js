import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
const routes = [
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
	{
		path: "reset-password",
		element: <ResetPassword />,
	},
];
export default routes;
