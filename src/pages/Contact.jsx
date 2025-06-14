import React from 'react';
import { useTranslation } from 'react-i18next';
import { useOnScreen } from '../hooks/useOnScreen';
import '../styles/Contact.scss';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  const [ref, visible] = useOnScreen();

  return (
    <section id="contact" ref={ref} className={`contact ${visible ? 'visible' : ''}`}>
      <h2 className="contact__title">{t('nav.contact')}</h2>
      <p>{t('contact.email')}: <a href="mailto:fugierlou@gmail.com">fugierlou@gmail.com</a></p>
      <p>{t('contact.phone')}: <a href="tel:+33782673272">+33 7 82 67 32 72</a></p>
      <p>{t('contact.linkedin')}: <a href="https://www.linkedin.com/in/lou-fugier-828b8a268/" target="_blank">lou-fugier</a></p>
      <ContactForm />
    </section>
  );
};

export default Contact;
