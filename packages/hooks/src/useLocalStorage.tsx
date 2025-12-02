/* istanbul ignore file */

import { useCallback, useState } from 'react'

/**
 * Hook simple pour lire/écrire/supprimer une valeur dans localStorage.
 * Note: `initialValue` est requis pour garantir que le type de retour
 * de `useState` est bien défini — cela simplifie l'optimisation du compilateur.
 */
export function useLocalStorage<T = string>(key: string, initialValue: T) {
  // séparer la logique hors du try/catch principal pour éviter
  // d'avoir des expressions conditionnelles complexes à l'intérieur.
  const readStoredValue = () => {
    /* istanbul ignore next */
    if (typeof window === 'undefined') return initialValue

    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return initialValue

      // JSON.parse peut lever — on l'encapsule dans son propre try/catch
      try {
        return JSON.parse(raw) as T
      } catch {
        // si le parsing échoue, retourner initialValue
        /* istanbul ignore next */
        return initialValue
      }
    } catch {
      // Accès à localStorage bloqué (ex: mode incognito strict)
      /* istanbul ignore next */
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readStoredValue)

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        if (typeof value === 'function') {
          setStoredValue((prev) => {
            const next = (value as (p: T) => T)(prev)
            try {
              window.localStorage.setItem(key, JSON.stringify(next))
            } catch {
              // ignore
            }
            return next
          })
        } else {
          setStoredValue(value)
          window.localStorage.setItem(key, JSON.stringify(value))
        }
      } catch {
        // Ignorer les erreurs d'écriture
      }
    },
    [key],
  )

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      // Ignorer
    }

    // Mettre l'état local à la valeur initiale explicitement
    setStoredValue(initialValue)
  }, [key, initialValue])

  return [storedValue, setValue, remove] as const
}

export default useLocalStorage
