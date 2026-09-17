import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const SERVICE_ID = 'service_395t2is'
const TEMPLATE_ID = 'template_e8hk0g8'
const PUBLIC_KEY = 'qnWoUNQBjKNrWaiYK'

const ContactForm = () => {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)

  const sendEmail = async (event) => {
    event.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus({ type: 'success', message: t('contactForm.success') })
      formRef.current.reset()
    } catch (error) {
      // EmailJS reports the reason in `text` (bad key, unknown template, quota…).
      console.error('EmailJS sendForm failed:', error?.status, error?.text || error)
      setStatus({ type: 'error', message: t('contactForm.error') })
    } finally {
      // Always re-enable the button, even if the request threw synchronously.
      setSending(false)
    }
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
      <h3 className="contact-form__legend">{t('contactForm.legend')}</h3>

      <label className="visually-hidden" htmlFor="contact-name">
        {t('contactForm.name')}
      </label>
      <input
        id="contact-name"
        type="text"
        name="name"
        autoComplete="name"
        placeholder={t('contactForm.name')}
        required
      />

      <label className="visually-hidden" htmlFor="contact-email">
        {t('contactForm.email')}
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder={t('contactForm.email')}
        required
      />

      <label className="visually-hidden" htmlFor="contact-phone">
        {t('contactForm.phone')}
      </label>
      <input
        id="contact-phone"
        type="tel"
        name="phone"
        autoComplete="tel"
        placeholder={t('contactForm.phone')}
      />

      <label className="visually-hidden" htmlFor="contact-message">
        {t('contactForm.message')}
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows="5"
        placeholder={t('contactForm.message')}
        required
      />

      <button type="submit" className="button button--primary" disabled={sending}>
        {sending ? t('contactForm.sending') : t('contactForm.send')}
      </button>

      <p
        className={`contact-form__status contact-form__status--${status?.type ?? 'idle'}`}
        role="status"
        aria-live="polite"
      >
        {status?.message}
      </p>
    </form>
  )
}

export default ContactForm
