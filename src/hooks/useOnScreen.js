import { useState, useEffect, useRef } from 'react'

/**
 * Reveals an element the first time it enters the viewport and keeps it
 * visible afterwards, so content never fades back out while scrolling up.
 * Users who ask for reduced motion get the content immediately.
 */
export const useOnScreen = (threshold = 0.15) => {
  const ref = useRef(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [visible, setVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    const element = ref.current
    if (!element || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, prefersReducedMotion])

  return [ref, visible]
}
