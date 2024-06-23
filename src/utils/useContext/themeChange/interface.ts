import { THEMES } from "./themeColor";

export interface TypeMode {
  name: string;
  background: string;
  foreground: string;
  backgroundcss?: string;
  foregroundcss?: string;
}

export interface TypeTheme {
  name: string;
  background: string;
  foreground: string;
  primary: string;
  hover?: string;
  muted: string;
  shadow: string;
  backgroundcss?: string;
  foregroundcss?: string;
  primarycss?: string;
  hovercss?: string;
  mutedcss?: string;
  shadowcss?: string;
}
export interface TypeThemeContextProps {
  mode: TypeMode;
  toggleMode: () => void;
  theme: TypeTheme;
  toggleTheme: (colorName: keyof typeof THEMES) => void;
}
