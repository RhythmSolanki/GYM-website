/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E11D2E',
        secondary: '#0A0A0A',
        accent: '#1A1A1A',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
