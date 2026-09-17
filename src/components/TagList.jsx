/**
 * Neon badge list used for technologies. `label` gives the list an accessible
 * name; `variant` switches between the default and the quieter style.
 */
const TagList = ({ items, label, variant = 'default' }) => {
  if (!items?.length) return null

  return (
    <ul className={`tag-list tag-list--${variant}`} aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag-list__item">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TagList
