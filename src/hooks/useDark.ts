import { useState } from 'react'
import { LocalStorageUtil } from '~/utils'

export function useDark() {
  // 初始化
  const dark = LocalStorageUtil.getItem<boolean>('dark')
  const [isDark, setIsDark] = useState(dark)

  if (isDark) {
    document.documentElement.classList.add('dark')
  }

  const setDark = (value: boolean) => {
    setIsDark(value)
    LocalStorageUtil.setItem('dark', value)
    document.documentElement.classList.toggle('dark', value)
  }

  const toggle = () => {
    setDark(!isDark)
  }

  return { isDark, toggle }
}
