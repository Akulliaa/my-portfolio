import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/portfolio'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p className="footer__line">
        © {new Date().getFullYear()} {PROFILE.name}. {t('footer.rights')}
      </p>
      <p className="footer__line footer__line--muted">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
          {t('footer.builtWith')}
        </a>
      </p>
      <p className="footer__line">
        <a href="#top">{t('nav.toTop')} ↑</a>
      </p>
    </footer>
  )
}

export default Footer
