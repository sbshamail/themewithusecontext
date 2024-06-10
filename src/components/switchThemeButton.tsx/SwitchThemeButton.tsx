"use client"
import React from 'react'
import { useTheme } from '@/utils/useContext/themeChange/themeChangeContext';

const SwitchThemeButton = () => {
  //@ts-ignore
  const { theme, toggleTheme } = useTheme();
  console.log(theme)

  return (
    <div>
      <button
   className={`p-2 px-4 ${theme.bg} ${theme.text}`}
        onClick={toggleTheme}>
        Theme Change
      </button>
    </div>
  )
}

export default SwitchThemeButton