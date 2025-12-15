/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#070808',
          950: '#030304',
          975: '#010102',
        },
        neon: {
          300: '#8bff66',
          400: '#63ff3d',
          500: '#39ff14',
          600: '#2fd510',
        },
        electric: {
          300: '#d08bff',
          400: '#b45cff',
          500: '#9a2fff',
          600: '#7d1fff',
        },
        charcoal: {
          700: '#11121a',
          800: '#0b0c12',
          900: '#07070d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Orbitron', 'Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};