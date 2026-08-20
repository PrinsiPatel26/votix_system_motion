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
          DEFAULT: '#071A3D',
          50: '#F2F5FA',
          100: '#E1E8F3',
          700: '#0E2A5C',
          800: '#0A2149',
          900: '#071A3D',
          950: '#04102A',
        },
        brand: {
          DEFAULT: '#1D55A6',
          50: '#EFF4FC',
          100: '#DCE7F7',
          200: '#B9CFEF',
          300: '#8CB0E3',
          400: '#4E80C6',
          500: '#1D55A6',
          600: '#17458A',
          700: '#12376E',
        },
        accent: {
          DEFAULT: '#FF9500',
          50: '#FFF6E8',
          100: '#FFEACC',
          200: '#FFD599',
          400: '#FFAB33',
          500: '#FF9500',
          600: '#E07E00',
          700: '#B86700',
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
        mist: '#F5F8FC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Barlow', 'Inter', 'ui-sans-serif', 'sans-serif'],
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
