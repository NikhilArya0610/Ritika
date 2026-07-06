import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
    './admin/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0b0b0b',
          900: '#111111',
          800: '#1b1b1b',
          700: '#2b2b2b',
          600: '#4f4f4f',
          500: '#7b7b7b',
          400: '#b3b3b3',
          300: '#dedede',
          200: '#f5f5f5',
          100: '#fbfbfb'
        },
        accent: '#d8c8b8'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(0, 0, 0, 0.12)',
        soft: '0 10px 30px rgba(16, 24, 40, 0.08)'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
