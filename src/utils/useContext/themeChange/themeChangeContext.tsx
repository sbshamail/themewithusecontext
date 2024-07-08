"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { TypeThemeContextProps } from "./interface";
import { chooseColor } from "./chooseColor";
export const ThemeContext = createContext<TypeThemeContextProps | undefined>(
  undefined
);
// theme to mode, color to theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "light", // Add default theme here
      toggleMode: () => {},
      toggleTheme: () => {},
      themeProperties: {},
      setRadius: () => {},
      activeThemeClass: null,
      color: "zinc" as keyof typeof chooseColor,
    };
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeThemeClass, setActiveThemeClass] = useState<DOMTokenList | null>(
    null
  );
  const [themeProperties, setThemeProperties] = useState<{
    [key: string]: string;
  }>({});
  const [color, setColor] = useState<keyof typeof chooseColor>("zinc");
  const [radius, setBorderRadius] = useState<string>("0.5em");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = useCallback(
    (color: keyof typeof chooseColor, themeMode: "light" | "dark" = theme) => {
      if (isClient) {
        setColor(color);
        console.log(color, themeMode);
        // const theme = labelTheme === "dark" ? "dark" : "light";
        const selectedTheme = chooseColor[color][themeMode];
        setThemeProperties(selectedTheme);
        for (const [key, value] of Object.entries(selectedTheme)) {
          document.documentElement.style.setProperty(key, value);
        }
        saveThemeSettings(theme, color, radius);
      }
    },
    [isClient, radius, theme]
  );

  const themeClass = useCallback(
    (property: "dark" | "light") => {
      if (isClient) {
        const root = document.documentElement;
        const theme = root?.classList;
        theme.remove("dark", "light");
        theme.add(property);
        toggleTheme(color, property);
      }
    },
    [isClient, color, toggleTheme]
  );
  // Fetch System Theme

  useEffect(() => {
    setIsClient(true);
    const savedThemeSettings = localStorage.getItem("hthemes");
    if (savedThemeSettings) {
      const { theme, color, borderRadius } = JSON.parse(savedThemeSettings);
      setTheme(theme);
      setColor(color);
      setBorderRadius(borderRadius);
      document.documentElement.style.setProperty("--radius", borderRadius);
      themeClass(theme); // Initialize theme without toggling
    } else {
      const prefersDarkScheme = window?.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const defaultTheme = prefersDarkScheme.matches ? "dark" : "light";
      themeClass(defaultTheme);
      setTheme(defaultTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);
  // console.log(activeThemeClass);
  // mode dark and light
  const toggleMode = useCallback(() => {
    if (isClient) {
      const root = document.documentElement;
      const activeTheme = root?.classList;
      setActiveThemeClass(activeTheme);

      if (activeTheme.contains("dark")) {
        themeClass("light");
        setTheme("light");
      } else {
        themeClass("dark");
        setTheme("dark");
      }
    }
  }, [isClient, themeClass, setTheme]);

  //borderRounded
  const setRadius = useCallback(
    (borderRadius: string) => {
      if (isClient) {
        const root = document.documentElement;
        root.style.setProperty("--radius", borderRadius + "em");
        setBorderRadius(borderRadius + "em");
        saveThemeSettings(theme, color, borderRadius + "em");
      }
    },
    [color, isClient, theme]
  );

  //LocalStorage to Save Setting
  const saveThemeSettings = (
    theme: "light" | "dark",
    color: keyof typeof chooseColor,
    borderRadius: string
  ) => {
    const themeSettings = { theme, color, borderRadius };
    localStorage.setItem("hthemes", JSON.stringify(themeSettings));
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleMode,
        toggleTheme,
        theme,
        themeProperties,
        activeThemeClass,
        color,
        radius,
        setRadius,
      }}
    >
      <div
        style={{
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
