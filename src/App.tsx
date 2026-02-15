import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CompanyProfile from './components/CompanyProfile'

const THEME_KEY = 'theme'

function getInitialTheme(): 'light' | 'dark' {
  const saved = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null
  if (saved === 'light' || saved === 'dark') return saved
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

function App() {
  const { i18n } = useTranslation()
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
  }

  return (
    <CompanyProfile
      currentLang={i18n.language}
      onLanguageChange={changeLanguage}
      theme={theme}
      onThemeChange={setTheme}
    />
  )
}

export default App
