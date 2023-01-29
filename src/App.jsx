import Pages from "./pages";
const App = () => {
	// const isDarkMode =
	// 	matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
	const light = matchMedia("(prefers-color-scheme: light)");
	const dark = matchMedia("(prefers-color-scheme: dark)");
	console.log(light, dark);
	const onchange = matchMedia("(prefers-color-scheme: dark)").onchange;
	console.log(onchange);
	if (typeof onchange === "function") {
		onchange(e => console.log(e));
	}
	// console.log(isDarkMode);
	return <Pages />;
};
export default App;
