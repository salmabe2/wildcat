/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary_color)',
          1: 'var(--primary_color_tint_1)',
          2: 'var(--primary_color_tint_2)'
        },
        light: 'var(--light_color)',
        dark: 'var(--dark_color)'
      }
    }
  },
  plugins: [require('tailwindcss-primeui')]
};
