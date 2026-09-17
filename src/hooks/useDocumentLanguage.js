import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Keeps the document in sync with the active language: the <html lang>
 * attribute, the page title and the meta description all follow i18next.
 */
export const useDocumentLanguage = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t('meta.title')

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t('meta.description'))

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) ogLocale.setAttribute('content', language === 'fr' ? 'fr_FR' : 'en_US')
  }, [language, t])
}
