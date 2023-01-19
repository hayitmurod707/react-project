import i18n from "i18next";
import Layout from "layout";
import { dark, light } from "plugins/styled-components";
import { element } from "prop-types";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./plugins/i18n";
import "./plugins/jquery";
import "./plugins/plyr";
import './plugins/react-toastify';
import "./plugins/rodal";
import "./plugins/swiper";
import "./plugins/tinymce";
import store from "./redux";
const AppWrapper = ({ children }) => {
	const mode = "dark";
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<ThemeProvider theme={mode === "light" ? light : dark}>
						<Layout>
							{children}
						</Layout>
					</ThemeProvider>
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
