module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
      display: ['Red Hat Display', 'sans-serif'],
      body: ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#F9F6F5',
          200: '#1C2834',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
