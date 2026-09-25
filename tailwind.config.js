/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F4F1',
          50: '#FFFFFF',
          100: '#F6F4F1',
          200: '#ECE8E1',
          300: '#DFD7CB',
          400: '#C8BFB1',
          800: '#2A2724',
          900: '#181715',
        },
        stone: {
          DEFAULT: '#E4DED2',
          50: '#F9F8F5',
          100: '#F1ECE2',
          200: '#E4DED2',
          300: '#D3C7B4',
          400: '#BCAC94',
          500: '#9F8E76',
          600: '#7B6C57',
          700: '#584C3D',
          800: '#2E281E',
          900: '#171410',
        },
        coral: {
          DEFAULT: '#F95C4B',
          50: '#FEF2F0',
          100: '#FDE2DE',
          200: '#FBC5BE',
          300: '#FA9B90',
          400: '#FA7464',
          500: '#F95C4B',
          600: '#E03E2D',
          700: '#B52B1C',
          800: '#831F14',
          900: '#4F110B',
        },
        brand: {
          paper: '#F6F4F1',
          stone: '#E4DED2',
          coral: '#F95C4B',
          black: '#000000',
        },
        background: '#060606',
        surface: '#0F0E0E',
        card: '#161514',
        border: 'rgba(228, 222, 210, 0.12)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23F95C4B' stroke-opacity='0.06'%3E%3Cpath d='M0 .5H40M.5 0V40'/%3E%3C/g%3E%3C/svg%3E\")",
        'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23F95C4B' fill-opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite alternate',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'glow-coral': '0 0 35px -5px rgba(249, 92, 75, 0.28)',
        'glow-stone': '0 0 35px -5px rgba(228, 222, 210, 0.18)',
        'glow-paper': '0 0 35px -5px rgba(246, 244, 241, 0.15)',
      }
    },
  },
  plugins: [],
}
