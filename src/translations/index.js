import {name as appName} from '../../app.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import Keys from '../config/Keys';

import en from './en';
import zh from './zh';

const languages = {
  en,
  zh
};

const languageCodes = Object.keys(languages);

const languagesDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    AsyncStorage.getItem(`${appName}_LANGUAGE_${Keys.storeVersion}`, (err, language) => {
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(languageCodes);

        callback(findBestAvailableLanguage.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: async (language) => {
    await AsyncStorage.setItem(`${appName}_LANGUAGE_${Keys.storeVersion}`, language);
  }
};

i18n
  .use(languagesDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: languages,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common'
  });

