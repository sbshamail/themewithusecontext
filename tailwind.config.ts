import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px", // Extra small devices (phones)
      sm: "640px", // Small devices (landscape phones)
      md: "976px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        effect: "var(--effect)",
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          over: "var(--primary-over)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          over: "var(--secondary-over)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        ring: "var(--ring)",
        muted: "var(--muted)",
      },
      textShadow: {
        DEFAULT: "0 1px 2px var(--shadow)",
        md: "0 2px 4px var(--ring)",
        lg: "0 4px 8px  var(--ring)",
        xl: "0 8px 16px  var(--ring)",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      }),
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-filters"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
