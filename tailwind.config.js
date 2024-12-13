/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '27':'27px',
        '53':'53px'
      },
      fontFamily: {
        'roboto':['Roboto','sans']
      }
    },
  },
  plugins: [],
}

