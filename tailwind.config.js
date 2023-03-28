module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#121212',
        'primary': '#FF9800',
      },
      fontFamily: {
        Gilroy: ["Gilroy", "sans-serif"]
      },
      backgroundColor: ['even'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
