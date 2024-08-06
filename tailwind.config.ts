import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'zoom-in-zoom-out': {
          '0%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(1.2)'},
        },
        'fade-in': {
          '0%': {opacity: '0', transform: 'translateY(-50px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        }
      },
      animation: {
        zoomIn: 'zoom-in-zoom-out 0.2s ease-in-out forwards',
        fadeIn: 'fade-in 0.5s ease forwards'
      },
    },
    screens: {
      'mobile': '426px',
      // => @media (min-width: 426px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
