/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        jk: ['var(--font-jakarta)', 'sans-serif'],
        st: ['var(--font-satoshi)', 'sans-serif'],
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
