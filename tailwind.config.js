/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        slate: '#2F3640',
        ivory: '#F8F9FA',
        dark: {
          bg: '#1E2227',
          text: '#E4E6EB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', 'serif'],
      },
      keyframes: {
        eq: {
          '0%': { height: '20%' },
          '100%': { height: '100%' }
        }
      }
    },
  },
  plugins: [],
}
