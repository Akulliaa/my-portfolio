import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home">
      <h1 className="home__title">Lou Fugier</h1>
      <h2 className="home__subtitle">Web Developer</h2>
      <p className="home__intro">{t('home.intro')}</p>
    </section>
  );
};

export default Home;
