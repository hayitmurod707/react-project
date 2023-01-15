import i18n from "i18next";
import Notifications from "plugins/notifications";
import { element } from "prop-types";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./plugins/i18n";
import "./plugins/jquery";
import store from "./redux";
const AppWrapper = ({ children }) => {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>{children}</BrowserRouter>
				<Notifications />
			</I18nextProvider>
		</Provider>
	);
};
AppWrapper.defaultProps = {
	children: <div>No element</div>,
};
AppWrapper.propTypes = {
	children: element,
};
export default AppWrapper;
