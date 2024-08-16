/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColorMain: 'rgba(var(--bgColor-primary))',
        bgColorMainDark: 'rgba(var(--bgColor-primary-dark))',

        bgColorSecondary: 'rgba(var(--bgColor-secondary))',

        bgColorContrast: 'rgba(var(--bgColor-contrast))',

        textColorMain: 'rgba(var(--text-color-primary))',
        textColorSecondary: '',
      },
    },
  },
  plugins: [],
};
