/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        gray: '#1b1b1b',
        beige: '#fffef5',
        yellow: '#ffda58',
        green: '#14D87A',
        orange: '#f36336',
      },
      fontFamily: {
        jk: ['Plus Jakarta Sans', 'sans-serif'],
        st: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        caption: ['20px', '19.4px'],
        menu: ['19px', '18.43px'],
        body: ['20px', '24px'],
        title: ['39.1px', '37.92px'],
        head2: ['61px', '59.2088px'],
        head1: ['76.3px', '74px'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
