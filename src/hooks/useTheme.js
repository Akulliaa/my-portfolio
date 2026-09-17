import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/** Stored choice first, then the OS preference, defaulting to the dark theme. */
const detectTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies).
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

/** Dark/light theme state, applied to <body> and persisted between visits. */
export const useTheme = () => {
  const [theme, setTheme] = useState(detectTheme)
  const darkMode = theme === 'dark'

  useEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
    document.documentElement.style.colorScheme = theme

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Persisting the preference is best-effort only.
    }
  }, [theme])

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, darkMode, toggleTheme }
}
