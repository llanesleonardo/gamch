import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../public/locales/en/translation.json';
import esTranslation from '../public/locales/es/translation.json';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
        lng: 'es', // Force Spanish by default
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18n;