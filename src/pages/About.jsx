import { useTranslation } from 'react-i18next'
import Section from '../components/Section'

const About = () => {
  const { t } = useTranslation()

  return (
    <Section id="about" title={t('about.title')} className="about">
      <div className="about__content">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>
    </Section>
  )
}

export default About
