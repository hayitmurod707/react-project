import { useTranslation } from "react-i18next";
import notification from "services/notification";
const App = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = () => {
		const lan = localStorage.getItem("i18nextLng") || "uz";
		console.log(lan);
		i18n.changeLanguage(lan === "uz" ? "ru" : "uz");
	};
	return (
		<div>
			<h1>App</h1>
			{t("name")}
			<button
				onClick={() =>
					notification("Hello", {
						type: "success",
					})
				}
			>
				show
			</button>
			<button type="button" onClick={changeLanguage}>
				Change language
			</button>
		</div>
	);
};
export default App;
