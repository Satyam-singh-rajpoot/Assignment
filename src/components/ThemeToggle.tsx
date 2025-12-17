import React from 'react'
import { useTheme } from '../theme/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-2 rounded bg-ui-surface"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '🌤️ Light'}
    </button>
  )
}
