// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E8B57', // Sea green
          dark: '#246B45',
          light: '#3FAE75',
        },
        secondary: {
          DEFAULT: '#F4A261', // Soft orange
        },
        accent: {
          DEFAULT: '#E76F51', // Coral
        },
        neutral: {
          DEFAULT: '#264653', // Deep blue-gray
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
