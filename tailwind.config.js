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
        },
        accent: {
          DEFAULT: '#F95C4B',
          hover: '#FF6B5B',
          muted: 'rgba(249, 92, 75, 0.15)',
        },
        paper: {
          DEFAULT: '#F4F4F5',
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
    },
  },
  plugins: [],
}
