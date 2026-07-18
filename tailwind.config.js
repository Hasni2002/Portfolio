/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        accent: {
          light: "rgb(var(--color-accent-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          dark: "rgb(var(--color-accent-dark) / <alpha-value>)",
        },
        purple: {
          light: "rgb(var(--color-purple-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-purple) / <alpha-value>)",
          dark: "rgb(var(--color-purple-dark) / <alpha-value>)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'glitch': 'glitch 3s infinite linear alternate-reverse',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glitch: {
            '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)', transform: 'translate(-2px, 2px)' },
            '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 25%, 0 25%)', transform: 'translate(2px, -2px)' },
            '20%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)', transform: 'translate(-2px, 0)' },
            '30%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 50%, 0 50%)', transform: 'translate(0, 2px)' },
            '40%': { clipPath: 'polygon(0 30%, 100% 30%, 100% 40%, 0 40%)', transform: 'translate(2px, -2px)' },
            '50%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 90%, 0 90%)', transform: 'translate(-2px, 2px)' },
            '60%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 60%, 0 60%)', transform: 'translate(2px, 0)' },
            '70%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 80%, 0 80%)', transform: 'translate(-2px, -2px)' },
            '80%': { clipPath: 'polygon(0 90%, 100% 90%, 100% 100%, 0 100%)', transform: 'translate(2px, 2px)' },
            '90%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 70%, 0 70%)', transform: 'translate(-2px, 0)' },
            '100%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 30%, 0 30%)', transform: 'translate(0, -2px)' },
        }
      }
    },
  },
  plugins: [],
}

