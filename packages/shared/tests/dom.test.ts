import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { getSystemTheme } from '../src/dom'

describe('getSystemTheme', () => {
  // sauvegarde de l'implémentation originale de matchMedia
  let originalMatchMedia: ((query: string) => MediaQueryList) | undefined

  beforeEach(() => {
    originalMatchMedia = window.matchMedia ?? undefined
  })

  afterEach(() => {
    if (originalMatchMedia === undefined) {
      // restore to undefined if it didn't exist
      ;(window as unknown as Record<string, unknown>).matchMedia = undefined
    } else {
      window.matchMedia = originalMatchMedia
    }
  })

  function createMediaQueryList(matches: boolean): MediaQueryList {
    return {
      matches,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }
  }

  it('retourne dark quand prefers-color-scheme: dark est vrai', () => {
    window.matchMedia = () => createMediaQueryList(true)
    expect(getSystemTheme()).toBe('dark')
  })

  it('retourne light quand prefers-color-scheme: dark est faux', () => {
    window.matchMedia = () => createMediaQueryList(false)
    expect(getSystemTheme()).toBe('light')
  })

  it('retourne la valeur par défaut si matchMedia lance une erreur', () => {
    window.matchMedia = () => {
      throw new Error('no match')
    }
    expect(getSystemTheme('light')).toBe('light')
  })

  it('retourne la valeur par défaut si matchMedia est undefined', () => {
    ;(window as unknown as Record<string, unknown>).matchMedia = undefined
    expect(getSystemTheme('dark')).toBe('dark')
  })

  it('retourne la valeur par défaut si `window` est undefined', () => {
    const gw = globalThis as unknown as Record<string, unknown>
    const orig = gw.window
    try {
      gw.window = undefined
      expect(getSystemTheme('dark')).toBe('dark')
    } finally {
      gw.window = orig
    }
  })

  it("retourne la valeur par défaut si matchMedia.matches n'est pas boolean", () => {
    window.matchMedia = () => ({ matches: null }) as unknown as MediaQueryList
    expect(getSystemTheme('light')).toBe('light')
  })
})
