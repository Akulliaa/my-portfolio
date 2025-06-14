import React from 'react';
import '../styles/ProjectCard.scss';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={image} alt={title} className="project-card__image" />
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="project-card__cta">View Project</span>
      </div>
    </a>
  );
};

export default ProjectCard;