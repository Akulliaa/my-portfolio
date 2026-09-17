import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/portfolio'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__status">
          <span className="hero__status-dot" aria-hidden="true" />
          {t('hero.status')}
        </p>

        <h1 id="hero-title" className="hero__title">
          {PROFILE.name}
        </h1>
        <p className="hero__role">{t('hero.role')}</p>
        <p className="hero__intro">{t('hero.intro')}</p>

        <div className="hero__actions">
          <a href="#projects" className="button button--primary">
            {t('hero.ctaProjects')}
          </a>
          <a href="#contact" className="button button--ghost">
            {t('hero.ctaContact')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
