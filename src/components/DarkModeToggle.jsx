import React from 'react';
import '../styles/DarkModeToggle.scss';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button className="dark-toggle" onClick={toggleDarkMode}>
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;

