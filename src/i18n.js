import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./locales/pl/translation.json";
import en from "./locales/en/translation.json";

const savedLng =
  typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : null;

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: savedLng || "en", // ← ustawia język z localStorage
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
