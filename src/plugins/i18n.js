import i18n from "i18next";
import {
	default as Backend,
	default as LanguageDetector,
} from "i18next-browser-languagedetector";
import Russian from "locales/ru/translation.json";
import Uzbek from "locales/uz/translation.json";
import { initReactI18next } from "react-i18next";
const fallbackLng = localStorage.getItem("i18nextLng") || "uz";
const debug = process.env.NODE_ENV === "development";
i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			uz: {
				translation: Uzbek,
			},
			ru: {
				translation: Russian,
			},
		},
		fallbackLng,
		debug,
		detection: {
			order: ["queryString", "cookie"],
			cache: ["cookie"],
		},
	});
export default i18n;
