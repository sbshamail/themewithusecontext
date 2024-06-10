"use client"
import React from 'react'
import SwitchThemeButton from '../switchThemeButton.tsx/SwitchThemeButton'
import { useTheme } from '@/utils/useContext/themeChange/themeChangeContext';
const Navbar = () => {
    //@ts-ignore
    const { theme } = useTheme();
    return (
        <div className={`bg-blue-200 p-2  ${theme.bg} ${theme.text}`}>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold'>
                    LOGO
                </h1>
                <SwitchThemeButton />
            </div>
        </div>
    )
}

export default Navbar