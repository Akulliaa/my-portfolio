import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import '../styles/ContactForm.scss';

const ContactForm = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_395t2is',
      'template_e8hk0g8',
      formRef.current,
      'qnWoUNQBjKNrWaiYK'
    )
    .then(
      () => {
        setStatus(t('contactForm.success'));
        formRef.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus(t('contactForm.error'));
      }
    );
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="name" placeholder={t('contactForm.name')} required />
      <input type="email" name="email" placeholder={t('contactForm.email')} required />
      <input type="tel" name="phone" placeholder={t('contactForm.phone')} />
      <textarea name="message" rows="5" placeholder={t('contactForm.message')} required />
      <button type="submit">{t('contactForm.send')}</button>
      {status && <p className="contact-form__status">{status}</p>}
    </form>
  );
};

export default ContactForm;