import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../lokals/eng/translation.json";
import ru from "../lokals/ru/translation.json";
import uz from "../lokals/uz/translation.json";

// Tashqaridan chaqirish uchun: changeLanguage("uz" | "ru" | "en")
export const changeLanguage = (lng) => i18n.changeLanguage(lng);

i18n
  .use(LanguageDetector) // brauzerning tilini aniqlash
  .use(initReactI18next) // React bilan bog‘lash
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    fallbackLng: "uz", // topa olmasa, ozbekca qaytadi
    interpolation: {
      escapeValue: false, // React o‘zi XSS’dan himoya qiladi
    },
  });

export default i18n;
