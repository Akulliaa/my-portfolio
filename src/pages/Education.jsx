import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import { EDUCATION, LANGUAGES } from '../data/portfolio'

const Education = () => {
  const { t } = useTranslation()

  return (
    <Section id="education" title={t('education.title')} className="education">
      <ol className="education__list">
        {EDUCATION.map((entry) => {
          const base = `education.${entry.id}`
          return (
            <li key={entry.id} className="education__item">
              <p className="education__period">
                <time dateTime={entry.start}>{t(`${base}.period`)}</time>
              </p>
              <div className="education__body">
                <h3 className="education__degree">{t(`${base}.degree`)}</h3>
                <p className="education__school">
                  {t(`${base}.school`)}
                  <span aria-hidden="true"> · </span>
                  <span className="education__location">{t(`${base}.location`)}</span>
                </p>
                <p className="education__detail">{t(`${base}.detail`)}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="education__languages">
        <h3 className="education__languages-title">{t('education.languagesTitle')}</h3>
        <ul className="education__languages-list">
          {LANGUAGES.map((language) => (
            <li key={language}>
              <span className="education__language-name">
                {t(`education.languages.${language}.name`)}
              </span>
              <span className="education__language-level">
                {t(`education.languages.${language}.level`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Education
