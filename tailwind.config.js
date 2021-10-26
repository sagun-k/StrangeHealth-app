module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        color1:"#121212",
        "hoverColor":"#B69552"
      },
      backgroundImage: {
        "container":"url('./images/background.svg')"
      },
      fontSize:{
        "xxm":"9px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
