import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import ExperienceCard from '../components/ExperienceCard'
import { EXPERIENCES } from '../data/portfolio'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <Section id="experience" title={t('experience.title')} className="experience">
      <div className="experience__list">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </Section>
  )
}

export default Experience
