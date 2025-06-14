import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/NavBar.scss';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">LOU FUGIER</div>
      <ul className="navbar__links">
        <li><a href="#about">{t('nav.about')}</a></li>
        <li><a href="#projects">{t('nav.projects')}</a></li>
        <li><a href="#contact">{t('nav.contact')}</a></li>
      </ul>
      <button className="navbar__lang" onClick={toggleLang}>
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </button>
    </nav>
  );
};

export default NavBar;