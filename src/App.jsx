import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import CVDownload from './components/CVDownload';
import TechStack from './components/TechStack';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="App">
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <CVDownload />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
