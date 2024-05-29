/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      // Define brand colors
      colors: {
        'orange': '#F47A1E',
        'orange-light': '#FF8C35',
        'orange-dark': '#E56300',
        'green': '#1E9605',
        'green-light': '#30c012',
        'gray': {
          200: '#E8E5DF',
          500: '#777777',
          800: '#141414',
          900: '#121212',
        },
        'yellow': {
          300: '#FDBB0A',
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1240px',
        'xl': '1440px',
        '2xl': '1640px',
      },
      borderRadius: {
        '3xl': '20px',
      },
    },
  },
  plugins: [],
}
