import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/NavBar.scss';

import sunIcon from '../assets/sun-cyberpunk.png';
import moonIcon from '../assets/moon-cyberpunk.png';

const NavBar = ({ darkMode, toggleDarkMode }) => {
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
      <div className="navbar__controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          className={`dark-toggle-inline ${darkMode ? 'dark' : 'light'}`}
          onClick={toggleDarkMode}
        >
          <img
            src={darkMode ? sunIcon : moonIcon}
            alt="Toggle theme"
            className="dark-toggle-img"
          />
        </button>
        <button className="navbar__lang" onClick={toggleLang}>
          {i18n.language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;