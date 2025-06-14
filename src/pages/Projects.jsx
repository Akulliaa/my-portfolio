import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import { useOnScreen } from '../hooks/useOnScreen';
import '../styles/Projects.scss';

import pianoImg from '../assets/piano.png';
import atimImg from '../assets/atim.png';
import holoImg from '../assets/holoreed.png';

const Projects = () => {
  const { t } = useTranslation();
  const [ref, visible] = useOnScreen();

  const projects = [
    {
      title: t('projects.piano.title'),
      description: t('projects.piano.description'),
      image: pianoImg,
      link: 'https://github.com/Akulliaa/Piano-Roll-App'
    },
    {
      title: t('projects.atim.title'),
      description: t('projects.atim.description'),
      image: atimImg,
      link: 'https://www.atim.com/acw-battery-life/'
    },
    {
      title: t('projects.holoreed.title'),
      description: t('projects.holoreed.description'),
      image: holoImg,
      link: 'https://github.com/Akulliaa/HoloReed'
    }

  ];

  return (
    <section id="projects" ref={ref} className={`projects ${visible ? 'visible' : ''}`}>
      <h2 className="projects__title">{t('nav.projects')}</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
