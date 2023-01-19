import { element } from "prop-types";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Link to="/">Home</Link>
				</div>
				<div>
					<Link to="/about">About</Link>
				</div>
				<div>
					<Link to="/login">Login</Link>
				</div>
				<div>
					<Link to="/register">Register</Link>
				</div>
				<div>
					<Link to="/reset-password">Reset Password</Link>
				</div>
				<div>
					<Link to="/profile">Profile</Link>
				</div>
				<div>
					<Link to="/profile/settings">Settings</Link>
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};
Layout.defaultProps = {
	children: "No element",
};
Layout.propTypes = {
	children: element,
};
export default Layout;
