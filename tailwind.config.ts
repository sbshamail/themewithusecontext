import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
function generateOpacityVariants(baseColor: string) {
  const variants: any = {};
  const opacityValues = [0.5, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  opacityValues.forEach((value) => {
    variants[value] = `hsla(var(--${baseColor}), 0.${value})`;
  });
  return variants;
}

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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        effect: {
          DEFAULT: "hsla(var(--ring),0.05)",
          md: "hsla(var(--ring),0.1)",
          lg: "hsla(var(--ring),0.15)",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          ...generateOpacityVariants("background"),
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          ...generateOpacityVariants("foreground"),
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          ...generateOpacityVariants("primary"),
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          ...generateOpacityVariants("accent"),
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // boxShadow: {
      //   sm: "0 1px 2px 0 hsl(var(--ring),0.05)",
      //   DEFAULT:
      //     "0 1px 3px 0 hsla(var(--ring),0.1), 0 1px 2px -1px hsla(var(--ring),0.1)",
      //   md: "0 4px 6px -1px hsla(var(--ring),0.1), 0 2px 4px -2px hsla(var(--ring),0.1)",
      //   lg: "0 10px 15px -3px hsla(var(--ring),0.1), 0 4px 6px -4px hsla(var(--ring),0.1)",
      //   xl: "0 20px 25px -5px hsla(var(--ring),0.1), 0 8px 10px -6px hsla(var(--ring),0.1)",
      //   inner: "box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      // },
      textShadow: {
        DEFAULT: "0 1px 2px hsl(var(--shadow),0.2)",
        md: "0 2px 4px hsl(var(--ring))",
        lg: "0 4px 8px  hsl(var(--ring))",
        xl: "0 8px 16px  hsl(var(--ring))",
      },
      zIndex: {
        selection: "var(--selection)",
        popOver: "var(--popOver)",
        drawer: "var(--drawer)",
        modal: "var(--modal)",
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
    plugin(function ({ addUtilities, matchUtilities, theme }: any) {
      const newUtilities = {};

      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
export default config;
