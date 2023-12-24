import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from './src/i18n/en.json'
import translationHK from './src/i18n/zh-HK.json'

const resources = {
  en: {
    translation: translationEN
  },
  zh_HK: {
    translation: translationHK
  }
}

i18n.use(initReactI18next)
   .init({
      resources,
      fallbackLng: "en",
      lng: "en",
      compatibilityJSON: 'v3',
      interpolation: {
         escapeValue: false,
      },
   })

export default i18n