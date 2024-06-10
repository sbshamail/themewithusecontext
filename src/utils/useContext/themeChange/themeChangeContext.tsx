"use client"
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({});

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('theme change error');
    }
    return context;
};

const THEMES = {
    light: {
        name: "light",
        bg: "bg-light-primary",
        text: "text-light-text"
    },
    dark: {
        name: "dark",
        bg: "bg-dark-primary",
        text: "text-dark-text"
    }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(THEMES.light);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme.name === "light" ? THEMES.dark : THEMES.light);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;


export const GetTheme=()=>{
    return<></>
}