import { chooseColor } from "./chooseColor";

export interface TypeThemeContextProps {
  toggleMode?: () => void;
  toggleTheme: (
    colorName: keyof typeof chooseColor,
    theme?: "light" | "dark"
  ) => void;
  theme: "dark" | "light";
  themeProperties: {};
  activeThemeClass: DOMTokenList | null;
  color: keyof typeof chooseColor;
  setRadius: (str: string) => void;
  radius: string;
}

export interface typeChooseColor {
  [key: string]: {
    light: {
      [key: string]: string;
    };
    dark: {
      [key: string]: string;
    };
  };
}
