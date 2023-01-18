import { createRoot } from "react-dom/client";
import App from "./App";
import AppWrapper from "./AppWrapper";
import reportWebVitals from "./reportWebVitals";
const root = createRoot(document.getElementById("root"));
root.render(
	<AppWrapper>
		<App />
	</AppWrapper>
);
reportWebVitals();
