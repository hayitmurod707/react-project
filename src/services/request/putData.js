import axios from "axios";
import getOptions from "./getOptions";
import middleware from "./middleware";
axios.interceptors.request.use(
	config => config,
	e => Promise.reject(e)
);
axios.interceptors.response.use(
	response => response,
	error => middleware(error)
);
const putData = async (url, data, options, auth) => {
	try {
		const fetchData = await axios.put(url, data, {
			...getOptions(auth),
			...options,
		});
		return { data: fetchData, error: {}, status: "SUCCESS" };
	} catch (error) {
		return { data: {}, error, status: "ERROR" };
	}
};
export default putData;
