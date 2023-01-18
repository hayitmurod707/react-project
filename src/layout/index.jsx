import { element } from "prop-types";
const Layout = ({ children }) => {
	return <>{children}</>;
};
Layout.defaultProps = {
	children: "No element",
};
Layout.propTypes = {
	children: element,
};
export default Layout;
