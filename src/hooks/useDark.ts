import { useState } from 'react'

export function useDark() {
  // 初始化
  const dark = localStorage.getItem('dark')
  const [isDark, setIsDark] = useState(dark === 'true')

  if (isDark) {
    document.documentElement.classList.add('dark')
  }

  const setDark = (value: boolean) => {
    setIsDark(value)
    localStorage.setItem('dark', String(value))
    document.documentElement.classList.toggle('dark', value)
  }

  const toggle = () => {
    setDark(!isDark)
  }

  return { isDark, toggle }
}
