import notification from "services/notification";
const App = () => {
	return (
		<div>
			<h1>App</h1>
			<button
				onClick={() =>
					notification("Hello", {
						type: "success",
					})
				}
			>
				show
			</button>
		</div>
	);
};
export default App;
