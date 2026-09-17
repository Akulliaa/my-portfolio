import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/portfolio'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <Section id="projects" title={t('projects.title')} className="projects">
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
