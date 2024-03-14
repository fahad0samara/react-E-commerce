// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import enTranslation from './en.json';
import arTranslation from './ar.json';
import { RootState } from './redux/store';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const useCurrentLanguage = () => {
  return useSelector((state: RootState) => state.language.language);
};

export default i18n;
