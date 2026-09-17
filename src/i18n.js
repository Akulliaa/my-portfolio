import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'

export const SUPPORTED_LANGUAGES = ['en', 'fr']
const STORAGE_KEY = 'portfolio-lang'

/** Previous choice first, then the browser preference, then English. */
const detectLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies).
  }

  const browser = navigator.language?.slice(0, 2)
  return SUPPORTED_LANGUAGES.includes(browser) ? browser : 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: detectLanguage(),
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // Persisting the preference is best-effort only.
  }
})

export default i18n
