'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: Theme
  systemTheme: Theme
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
  resolvedTheme: 'dark',
  systemTheme: 'dark',
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  disableTransitionOnChange = false,
}: {
  children: ReactNode
  defaultTheme?: Theme
  attribute?: string          // accepted for API compat, always uses 'class'
  disableTransitionOnChange?: boolean
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  // Read from localStorage on mount (after the inline head script already set the class)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('titan-theme') as Theme | null
      if (stored === 'dark' || stored === 'light') {
        setThemeState(stored)
      }
    } catch {}
  }, [])

  // Apply class to <html> and persist on every change
  useEffect(() => {
    const root = document.documentElement

    if (disableTransitionOnChange) {
      const css = document.createElement('style')
      css.textContent = '*, *::before, *::after { transition: none !important; }'
      document.head.appendChild(css)
      // Force reflow, then remove
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.getComputedStyle(root).opacity
      document.head.removeChild(css)
    }

    root.classList.remove('dark', 'light')
    root.classList.add(theme)

    try {
      localStorage.setItem('titan-theme', theme)
    } catch {}
  }, [theme, disableTransitionOnChange])

  const setTheme = (t: Theme) => setThemeState(t)

  const systemTheme: Theme =
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme: theme, systemTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
