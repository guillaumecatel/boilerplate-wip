import { useEffect, useRef, type RefObject } from 'react'

export interface UseClickOutsideOptions {
  /**
   * Callback when click outside is detected
   */
  onClickOutside: (event: MouseEvent | TouchEvent) => void
  /**
   * Whether the hook is enabled
   * @default true
   */
  enabled?: boolean
  /**
   * Event types to listen for
   * @default ['mousedown', 'touchstart']
   */
  events?: ('mousedown' | 'touchstart' | 'click')[]
}

/**
 * Hook for detecting clicks outside of an element
 *
 * @example
 * ```tsx
 * const ref = useClickOutside<HTMLDivElement>({
 *   onClickOutside: () => setIsOpen(false),
 *   enabled: isOpen
 * })
 *
 * return <div ref={ref}>Content</div>
 * ```
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  options: UseClickOutsideOptions,
): RefObject<T> {
  const {
    onClickOutside,
    enabled = true,
    events = ['mousedown', 'touchstart'],
  } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: Event) => {
      const mouseEvent = event as MouseEvent | TouchEvent
      if (ref.current && !ref.current.contains(mouseEvent.target as Node)) {
        onClickOutside(mouseEvent)
      }
    }

    events.forEach((eventType) => {
      document.addEventListener(eventType, handleClickOutside)
    })

    return () => {
      events.forEach((eventType) => {
        document.removeEventListener(eventType, handleClickOutside)
      })
    }
  }, [onClickOutside, enabled, events])

  return ref as RefObject<T>
}

export default useClickOutside
