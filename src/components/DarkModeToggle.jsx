import { useTranslation } from 'react-i18next'
import sunIcon from '../assets/sun-cyberpunk.png'
import moonIcon from '../assets/moon-cyberpunk.png'

/** Theme switch. Shows the icon of the theme it will switch to. */
const DarkModeToggle = ({ darkMode, toggleTheme }) => {
  const { t } = useTranslation()
  const label = darkMode ? t('nav.toLight') : t('nav.toDark')

  return (
    <button
      type="button"
      className={`theme-toggle ${darkMode ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={!darkMode}
    >
      <img src={darkMode ? sunIcon : moonIcon} alt="" className="theme-toggle__icon" />
    </button>
  )
}

export default DarkModeToggle
