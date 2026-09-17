import { useTranslation } from 'react-i18next'
import Section from './Section'
import TagList from './TagList'
import { SKILL_GROUPS } from '../data/portfolio'

/** Skills grouped by role in the profile, without invented proficiency levels. */
const TechStack = () => {
  const { t } = useTranslation()

  return (
    <Section id="skills" title={t('skills.title')} intro={t('skills.intro')} className="skills">
      <div className="skills__groups">
        {SKILL_GROUPS.map((group) => (
          <div key={group.id} className={`skills__group skills__group--${group.emphasis}`}>
            <h3 className="skills__group-title">{t(`skills.groups.${group.id}`)}</h3>
            <TagList
              items={group.items}
              label={t(`skills.groups.${group.id}`)}
              variant={group.emphasis === 'secondary' ? 'muted' : 'default'}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TechStack
