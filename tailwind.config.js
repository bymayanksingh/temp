/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /bg-(blue|purple|green|red)-500/ },
    { pattern: /from-(blue|purple|green|red)-600/ },
    { pattern: /to-(blue|purple|green|red)-600/ },
  ],
};