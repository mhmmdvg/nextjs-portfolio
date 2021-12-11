module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Outfit', 'ui-sans-serif', 'system-ui'],
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        skills: "#F7F7FB",
        skdrk: "#1d1f1d",
        purp: "#8048f3",
        drk: "#191A19"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
