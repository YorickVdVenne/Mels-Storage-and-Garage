import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-primary',
    'bg-secondary',
    'bg-light-primary',
    'bg-lightest-primary',
    'bg-light-secondary',
    'bg-custom-grey',
    'bg-teal',
    'bg-coral',
    'bg-lavender',
    'bg-muted-gold',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'grotesk-grand': ['Cy Grotesk Grand'],
        grotesk: ['Cy Grotesk'],
        poppins: ['Poppins', 'sans-serif'],
        beckman: ['Beckman'],
        'beckman-heavy': ['Beckman Heavy'],
        commons: ['TT Commons'],
        roboto: ['Roboto'],
      },
      colors: {
        primary: '#082866',
        secondary: '#00adef',
        'charcoal-black': '#2E2E2E',
        'ivory-white': '#F8F9FA',
        'light-primary': '#1D1F30',
        'lightest-primary': '#233554',
        'light-secondary': '#302130',
        'custom-grey': '#8892b0',
        teal: '#00B3A4',
        coral: '#FF6B6B',
        lavender: '#C3B1E1',
        'muted-gold': '#E1B12C',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};

export default config;
