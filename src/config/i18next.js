import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 🔑 Importo los archivos de traducción
import es from "../locales/es.json";
import en from "../locales/en.json";

i18n
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // conecta con React
  .init({
    fallbackLng: "es", // idioma por defecto si no detecta
    debug: false, // pon true si quieres ver logs en consola
    interpolation: {
      escapeValue: false, // React ya protege de XSS
    },
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
  });

export default i18n;
