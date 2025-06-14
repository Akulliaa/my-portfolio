import React from 'react';
import '../styles/TechStack.scss';

const TechStack = () => {
  const stack = [
    'React', 'Vite', 'SCSS', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'GitHub'
  ];

  return (
    <section className="techstack">
      <h2>Tech Stack</h2>
      <ul>
        {stack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;