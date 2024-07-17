import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        'light-green' : '#26C485',
        'dark-green' : '#1A895D',
        'full-white' : '#FFFFFF',
        'mat-white' : '#D9D9D9',
        'mat-black' : '#252424',
        'gray' : '#606060',
      },
      backgroundImage: {
        'background' : 'url(/public/background-wide.png)'
      },
      spacing: {
        '500': '31.25rem',
        '700': '43.75rem',
        '900': '56.25rem'
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config