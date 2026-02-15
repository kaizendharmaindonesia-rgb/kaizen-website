import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import id from './locales/id.json'
import ja from './locales/ja.json'

const resources = {
  en: { translation: en },
  id: { translation: id },
  ja: { translation: ja },
}

const savedLang = localStorage.getItem('lang') as 'en' | 'id' | 'ja' | null

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || 'id',
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
