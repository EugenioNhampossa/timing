/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-linear': '#3D4ABA',
        pink: '#FD5B71',
        'gray-light': '#FAFAFF',
        black: '#070417',
        dark: '#18152C',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
