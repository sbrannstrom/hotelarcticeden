/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          default: '#001a36',
          '50': '#e4fcff',
          '100': '#cff7ff',
          '200': '#a8eeff',
          '300': '#74e0ff',
          '400': '#3ebeff',
          '500': '#1399ff',
          '600': '#008bff',
          '700': '#008bff',
          '800': '#007ce4',
          '900': '#005ab0',
        },
        blood: {
          default: '#aa0c0c',
          '50': '#fff1f1',
          '100': '#ffdfdf',
          '200': '#ffc4c4',
          '300': '#ff9b9b',
          '400': '#ff6161',
          '500': '#ff2f2f',
          '600': '#f21010',
          '700': '#cc0909',
          '900': '#8b1111',
          '950': '#4c0303'
        },
        gray: {
          '50': '#f8f8f8',
          '100': '#f0f0f0',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          default: '#bdbdbd',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
          '950': '#282828',
        },
        snow: {
          default: '#f5f5f5',
          '100': '#f0f0f0',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
          '950': '#282828',
        },
        sun: {
          '50': '#fefbe8',
          '100': '#fef6c3',
          '200': '#feeb8a',
          '300': '#fdd847',
          '400': '#fac215',
          default: '#e7a708',
          '600': '#ca8104',
          '700': '#a15b07',
          '800': '#85480e',
          '900': '#713b12',
          '950': '#421d06',
        }
      }
    },
    fontFamily: {
      'LemonMilk': ['Lemon Milk'],
      'RedHatDisplay': ['Red Hat Display']
    }
  },
  plugins: [
  ],
}

