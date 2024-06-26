import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "976px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        effect: "var(--effect)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        over: "var(--secondary)",
        secondary: "var(--secondary)",
        light: {
          background: "#FFFFFF",
          foreground: "#000000",
        },
        dark: {
          background: "#202124",
          foreground: "#FFFFFF",
        },
        blue: {
          background: "#2563EB",
          primary: "#3B82F6",
          foreground: "#000000",
          muted: "rgba(37, 100, 235, 0.527)",
          shadow: "rgba(37, 99, 235,0.1)",
        },
        green: {
          background: "#008000",
          primary: "#22C55E",
          foreground: "#000000",
          muted: "#0080003d",
          shadow: "rgba(0, 128, 0,0.1)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
