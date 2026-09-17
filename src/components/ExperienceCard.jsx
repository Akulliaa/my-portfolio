import { useTranslation } from 'react-i18next'
import TagList from './TagList'

/** One professional experience: header, short summary, key points, stack. */
const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation()
  const base = `experience.${experience.id}`
  const bullets = t(`${base}.bullets`, { returnObjects: true })

  return (
    <article className="experience-card">
      <header className="experience-card__header">
        <p className="experience-card__period">
          <time dateTime={experience.start}>{t(`${base}.period`)}</time>
        </p>
        <h3 className="experience-card__role">{t(`${base}.role`)}</h3>
        <p className="experience-card__company">
          <span className="experience-card__company-name">{t(`${base}.company`)}</span>
          <span aria-hidden="true"> · </span>
          <span>{t(`${base}.location`)}</span>
        </p>
        <p className="experience-card__type">{t(`${base}.type`)}</p>
      </header>

      <p className="experience-card__summary">{t(`${base}.summary`)}</p>

      <ul className="experience-card__bullets">
        {(Array.isArray(bullets) ? bullets : []).map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <TagList items={experience.tech} label={t(`${base}.company`)} />
    </article>
  )
}

export default ExperienceCard
