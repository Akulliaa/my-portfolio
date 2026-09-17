import { useTranslation } from 'react-i18next'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import TechStack from './components/TechStack'
import CVDownload from './components/CVDownload'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useDocumentLanguage } from './hooks/useDocumentLanguage'

function App() {
  const { t } = useTranslation()
  const { darkMode, toggleTheme } = useTheme()
  useDocumentLanguage()

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('nav.skipToContent')}
      </a>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <CVDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
