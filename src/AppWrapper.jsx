import i18n from "i18next";
import Layout from "layout";
import "plugins/i18n";
import "plugins/jquery";
import "plugins/plyr";
import "plugins/react-contexify";
import "plugins/react-toastify";
import "plugins/rodal";
import "plugins/swiper";
import "plugins/tinymce";
import { element } from "prop-types";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
const AppWrapper = ({ children }) => {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Layout>{children}</Layout>
				</BrowserRouter>
			</I18nextProvider>
		</Provider>
	);
};
AppWrapper.defaultProps = {
	children: "No element",
};
AppWrapper.propTypes = {
	children: element,
};
export default AppWrapper;
