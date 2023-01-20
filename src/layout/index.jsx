import { element } from "prop-types";
import { VscAccount, VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import notification from "services/notification";
import styled from "styled-components";
import Notifications from "./Notifications";
const StyledIcon = styled.div`
	color: red;
	&:hover {
		color: blue;
	}
`;
const Layout = ({ children }) => {
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<StyledIcon>
					<VscAccount />
					<VscSettingsGear />
				</StyledIcon>
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
			<div>
				<button
					onClick={() =>
						notification("Hello", {
							type: "success",
							autoClose: false,
							onClick: () => console.log("Hello"),
						})
					}
				>
					Show
				</button>
			</div>
			<div>{children}</div>
			<Notifications />
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
