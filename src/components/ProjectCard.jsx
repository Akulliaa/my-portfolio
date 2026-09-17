import { useTranslation } from 'react-i18next'
import TagList from './TagList'

/** One project: image, optional award, description, stack and outbound link. */
const ProjectCard = ({ project }) => {
  const { t } = useTranslation()
  const base = `projects.${project.id}`
  const title = t(`${base}.title`)
  const cta = project.linkType === 'code' ? t('projects.viewCode') : t('projects.viewSite')

  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={t(`${base}.title`)}
        className="project-card__image"
        loading="lazy"
        decoding="async"
      />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        {project.award && (
          <p className="project-card__award">
            <span className="visually-hidden">{t('projects.awardLabel')}: </span>
            {t(`${base}.award`)}
          </p>
        )}

        {project.context && (
          <p className="project-card__context">
            <span className="visually-hidden">{t('projects.contextLabel')}: </span>
            {t(`projects.context.${project.context}`)}
          </p>
        )}

        <p className="project-card__description">{t(`${base}.description`)}</p>

        <TagList items={project.tech} label={title} />

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__cta"
        >
          {cta}
          <span className="visually-hidden"> — {title}</span>
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
