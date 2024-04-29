import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/en.json';
import frTranslation from './fr/fr.json';

i18n
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    }
  });

/** Adding custom translation formatters */
i18n.services.formatter?.add('lowercase', (value) => value.toLowerCase());

export default i18n;
