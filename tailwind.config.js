/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#00193C',
          50: '#F0F4F9',
          100: '#DCE5F0',
          700: '#062E67',
          800: '#042653',
          900: '#00193C',
          950: '#00122C',
        },
        brand: {
          DEFAULT: '#073B82',
          50: '#EDF4FB',
          100: '#D7E5F5',
          200: '#B0CBE8',
          300: '#80A7D3',
          400: '#3E72AE',
          500: '#073B82',
          600: '#052D64',
          700: '#04234E',
        },
        fluid: {
          DEFAULT: '#1689D8',
          50: '#EAF6FD',
          100: '#D0EBFA',
          500: '#1689D8',
          600: '#0D6FAF',
        },
        accent: {
          DEFAULT: '#F47A00',
          50: '#FFF2E5',
          100: '#FFE1C2',
          200: '#FFC38A',
          400: '#F79333',
          500: '#F47A00',
          600: '#C76100',
          700: '#9C4D00',
        },
        steel: {
          DEFAULT: '#526176',
          100: '#E3E8EF',
          200: '#C9D2DE',
          300: '#A3B0C2',
          400: '#7A8AA0',
          500: '#526176',
          600: '#404D5F',
          700: '#2F3947',
        },
        mist: '#F6F6F8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        shell: '1360px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(7,26,61,0.04), 0 8px 24px -12px rgba(7,26,61,0.18)',
        lift: '0 18px 44px -20px rgba(7,26,61,0.35)',
        header: '0 6px 20px -12px rgba(7,26,61,0.28)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        'flow-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'flow-x': 'flow-x 24s linear infinite',
      },
    },
  },
  plugins: [],
};
