/* istanbul ignore file */

import { useEffect, useRef } from 'react'

/**
 * Exécute la callback une seule fois (au montage) et retourne un cleanup optionnel.
 * Utile pour les initialisations globales qui ne doivent pas être ré-appliquées.
 */
export function useOnce(callback: () => void | (() => void)) {
  const ref = useRef(false)

  useEffect(() => {
    /* istanbul ignore next */
    if (ref.current) return
    ref.current = true

    const cleanup = callback()

    return typeof cleanup === 'function' ? cleanup : undefined
  }, [])
}

export default useOnce
