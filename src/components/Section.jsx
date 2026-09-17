import { useOnScreen } from '../hooks/useOnScreen'

/**
 * Standard page section: anchor target, reveal-on-scroll animation and a
 * consistent heading. Pass `titleId` when the heading must label the section.
 */
const Section = ({ id, title, intro, className = '', children }) => {
  const [ref, visible] = useOnScreen()
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={headingId}
      className={`section ${className} ${visible ? 'is-visible' : ''}`}
    >
      <div className="section__inner">
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

export default Section
