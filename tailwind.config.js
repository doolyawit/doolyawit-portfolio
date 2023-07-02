/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        gray: '#1b1b1b',
        beige: '##fffef5',
        yellow: '##ffda58',
        green: '#14D87A',
        orange: '#f36336',
      },
      fontFamily: {
        jk: ['var(--font-jakarta)', 'sans-serif'],
        st: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
