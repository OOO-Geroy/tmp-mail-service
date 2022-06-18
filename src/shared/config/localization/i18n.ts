/* eslint-disable import/extensions */
import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    detection: {
      order: [
        'htmlTag',
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain',
      ],
    },
    resources,
    fallbackLng: 'en',

    keySeparator: false,
  });

export const i18nL = i18n;
