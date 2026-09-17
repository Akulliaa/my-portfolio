import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DarkModeToggle from './DarkModeToggle'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

const NavBar = ({ darkMode, toggleTheme }) => {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const isFrench = i18n.language === 'fr'
  const toggleLang = () => i18n.changeLanguage(isFrench ? 'en' : 'fr')

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    SECTIONS.map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top">
          LOU FUGIER
        </a>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label={t('nav.primary')}
        >
          <ul className="navbar__links">
            {SECTIONS.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === section ? 'true' : undefined}
                  className={activeSection === section ? 'is-active' : ''}
                >
                  {t(`nav.${section}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__controls">
          <DarkModeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

          <button
            type="button"
            className="navbar__lang"
            onClick={toggleLang}
            aria-label={isFrench ? t('nav.switchToEnglish') : t('nav.switchToFrench')}
          >
            <span aria-hidden="true">{isFrench ? '🇫🇷' : '🇬🇧'}</span>
            <span>{isFrench ? 'FR' : 'EN'}</span>
          </button>

          <button
            type="button"
            className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar
