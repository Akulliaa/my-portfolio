import { useTranslation } from 'react-i18next'
import Section from './Section'
import cvEN from '../assets/lou_fugier_en.pdf'
import cvFR from '../assets/lou_fugier_fr.pdf'

/** Resume download: the active language first, the other one as a fallback. */
const CVDownload = () => {
  const { t, i18n } = useTranslation()
  const isFrench = i18n.language === 'fr'

  const primary = isFrench ? cvFR : cvEN
  const secondary = isFrench ? cvEN : cvFR
  const primaryName = isFrench ? 'lou_fugier_fr.pdf' : 'lou_fugier_en.pdf'
  const secondaryName = isFrench ? 'lou_fugier_en.pdf' : 'lou_fugier_fr.pdf'

  return (
    <Section id="cv" title={t('cv.title')} intro={t('cv.intro')} className="cv">
      <div className="cv__actions">
        <a href={primary} download={primaryName} className="button button--primary">
          {t('cv.download')}
        </a>
        <a href={secondary} download={secondaryName} className="button button--ghost">
          {t('cv.downloadOther')}
        </a>
      </div>
    </Section>
  )
}

export default CVDownload
