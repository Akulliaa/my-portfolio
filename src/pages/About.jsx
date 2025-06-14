import React from 'react';
import { useTranslation } from 'react-i18next';
import { useOnScreen } from '../hooks/useOnScreen';
import '../styles/About.scss';



const About = () => {
  const { t } = useTranslation();
  const [ref, visible] = useOnScreen();
  return (
    <section id="about" ref={ref} className={`about ${visible ? 'visible' : ''}`}>
      <h2 className="about__title">{t('nav.about')}</h2>
      <p className="about__content">{t('about.text')}</p>
    </section>
    
  );

};

export default About;