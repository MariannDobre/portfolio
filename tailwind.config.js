/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        '3xl': '1716px',
      },
      colors: {
        bgColorMain: 'rgba(var(--bgColor-primary))',
        bgColorMainDark: 'rgba(var(--bgColor-primary-dark))',

        bgColorSecondary: 'rgba(var(--bgColor-secondary))',

        bgColorContrast: 'rgba(var(--bgColor-contrast))',

        textColorMain: 'rgba(var(--text-color-primary))',
        textColorMainHover: 'rgba(var(--text-color-primary-hover))',

        textColorSecondary: 'rgba(var(--text-color-secondary))',
      },
    },
  },
  plugins: [],
};
