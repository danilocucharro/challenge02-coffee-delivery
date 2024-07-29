/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo2: ['"Baloo 2"', 'sans-serif'],
        roboto: ['Roboto', 'serif']
      },
      backgroundImage: {
        'banner': 'url("/src/assets/background.png")',
        'american': 'url("/src/assets/american.svg")',
        'arabian': 'url("/src/assets/arabian.svg")',
        'capuccino': 'url("/src/assets/capuccino.svg")',
        'cold': 'url("/src/assets/cold.svg")',
        'creme': 'url("/src/assets/creme.svg")',
        'cuban': 'url("/src/assets/cuban.svg")',
        'hawaian': 'url("/src/assets/hawaian.svg")',
        'hot-chocolate': 'url("/src/assets/hot-chocolate.svg")',
        'irish': 'url("/src/assets/irish.svg")',
        'latte': 'url("/src/assets/latte.svg")',
        'macchiato': 'url("/src/assets/macchiato.svg")',
        'mocaccino': 'url("/src/assets/mocaccino.svg")',
        'traditional': 'url("/src/assets/traditional.svg")',
        'with-milk': 'url("/src/assets/with-milk.svg")',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
  
      'yellow-dark': '#C47F17',
      'yellow': '#DBAC2C',
      'yellow-light': '#F1E9C9',
  
      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',
  
      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
      
      'background': '#FAFAFA',
    },
  },
  plugins: [],
}