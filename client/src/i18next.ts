import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./lang/en.json";
import bangla from "./lang/bn.json";

const resources = {
  en: {
    translation: english,
  },
  bn: {
    translation: bangla,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});
export default i18next;
