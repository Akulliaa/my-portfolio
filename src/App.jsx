import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import CVDownload from './components/CVDownload';
import TechStack from './components/TechStack';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
  return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <CVDownload />
        <Projects />
        <TechStack />
        <Contact />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      </div>
      
    </>
  );
}
export default App;