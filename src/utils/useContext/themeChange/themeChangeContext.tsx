"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { THEMES, MODES } from "./themeColor";
import { TypeThemeContextProps, TypeTheme, TypeMode } from "./interface";
export const ThemeContext = createContext<TypeThemeContextProps | undefined>(
  undefined
);
// theme to mode, color to theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("theme change error");
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<TypeMode>(MODES.light);
  const [theme, setTheme] = useState<TypeTheme>(THEMES.blue);
  // Fetch System Theme
  useEffect(() => {
    const prefersDarkScheme = window?.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setMode(prefersDarkScheme.matches ? MODES.dark : MODES.light);

    const handleChange = (e: MediaQueryListEvent) => {
      setMode(e.matches ? MODES.dark : MODES.light);
    };

    prefersDarkScheme.addEventListener("change", handleChange);

    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange);
    };
  }, []);
  // mode dark and light
  const toggleMode = () => {
    setMode((prevTheme) =>
      prevTheme.name === "light" ? MODES.dark : MODES.light
    );
  };
  //theme set
  const toggleTheme = (colorName: keyof typeof THEMES) => {
    setTheme(THEMES[colorName]);
    // const root = document.documentElement;
    // console.log(document.documentElement);
    // root.classList.remove("dark", "light");
    // root.classList.add("orange");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme, toggleTheme }}>
      <div
        className={`${mode.background} ${mode.foreground}`}
        // className="bg-background text-foreground"
        style={{
          backgroundImage: `linear-gradient(to top right,${mode.backgroundcss} ,${theme.shadowcss} 50%,${mode.backgroundcss})`,
          padding: "1rem",
          minHeight: "100vh",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
