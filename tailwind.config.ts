import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        handelson: ['Handelson Two'],
        heavy: ['Beckman Heavy'],
        beckman: ['Beckman'],
        cheddar: ['CheddarGothicRough Regular'],
        commons: ['TT Commons']
      },
      colors: {
        'navy': '#171824',
        'light-navy': '#1D1F30',
        'lightest-navy': '#233554',
        'red': '#D93837',
        'light-red': '#302130',
        'custom-grey': '#8892b0'
      },
    },
  },
  plugins: [],
}
export default config
