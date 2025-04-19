import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import i18next from "i18next";

i18next
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        }
    })

export default i18n;