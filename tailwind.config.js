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
        background: '#080808',
        surface: {
          DEFAULT: '#111111',
          subtle: '#161616',
          elevated: '#1C1C1C',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          DEFAULT: '#F95C4B',
          hover: '#FF6B5B',
          muted: 'rgba(249, 92, 75, 0.15)',
          glow: 'rgba(249, 92, 75, 0.25)',
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
          950: '#2A0A06',
        },
        stone: {
          DEFAULT: '#E4DED2',
          50: '#F9F8F5',
          100: '#F1ECE2',
          200: '#E4DED2',
          300: '#D3C7B4',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        paper: {
          DEFAULT: '#F4F4F5',
          50: '#FFFFFF',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          muted: '#A1A1AA',
          subtle: '#71717A',
          dark: '#27272A',
        },
        editorial: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.20)',
          grid: 'rgba(255, 255, 255, 0.03)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'editorial-grid': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
