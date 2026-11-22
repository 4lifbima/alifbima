/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./assets/css/main.css",
    "./app/assets/css/main.css",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        brand: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        primary: '#FE4619',
        'primary-light': '#FF6B47',
        'primary-dark': '#E0380E',
        'accent-teal': '#FE4619',
        'dark-bg': '#141414',
        'dark-surface': '#1D1D1D',
        'dark-card': '#282828',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
