import { useTranslation } from 'react-i18next'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import { PROFILE } from '../data/portfolio'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t('contact.title')} intro={t('contact.intro')} className="contact">
      <ul className="contact__details">
        <li>
          <span className="contact__label">{t('contact.email')}</span>
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </li>
        <li>
          <span className="contact__label">{t('contact.phone')}</span>
          <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a>
        </li>
        <li>
          <span className="contact__label">{t('contact.linkedin')}</span>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            {PROFILE.linkedinLabel}
          </a>
        </li>
        <li>
          <span className="contact__label">{t('contact.github')}</span>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            {PROFILE.githubLabel}
          </a>
        </li>
        <li>
          <span className="contact__label">{t('contact.location')}</span>
          <span>{PROFILE.location}</span>
        </li>
      </ul>

      <ContactForm />
    </Section>
  )
}

export default Contact
