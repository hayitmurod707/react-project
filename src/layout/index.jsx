import themes from "configurations/themes";
import { element } from "prop-types";
import { useSelector } from "react-redux";
import notification from "services/notification";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
	const userTheme = useSelector(state => state?.settings?.theme);
	const findTheme = themes.find(({ theme }) => theme === userTheme);
	const theme = findTheme === undefined ? "" : findTheme;
	return (
		<ThemeProvider theme={theme}>
			<div>
				<button onClick={() => notification("Hello")}>Notify</button>
				<Header />
				<div>
					<div>
						<Sidebar />
					</div>
					<div>{children}</div>
				</div>
			</div>
			<Notifications />
		</ThemeProvider>
	);
};
Layout.defaultProps = {
	children: "No element",
};
Layout.propTypes = {
	children: element,
};
export default Layout;
