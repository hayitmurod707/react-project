import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppWrapper from "./AppWrapper";
import reportWebVitals from "./reportWebVitals";
const root = createRoot(document.getElementById("root"));
const Component =
	process.env.NODE_ENV === "development" ? (
		<StrictMode>
			<AppWrapper>
				<App />
			</AppWrapper>
		</StrictMode>
	) : (
		<AppWrapper>
			<App />
		</AppWrapper>
	);
root.render(Component);
reportWebVitals();
