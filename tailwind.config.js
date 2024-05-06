/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      backgroundImage: {
        'site': "url('/site-bg.svg')"
      }
    },
    container: {
      padding: '15px'
    },
    screens: {
      'sm': '640',
      'md': '769px',
      'lg': '960px',
      'xl': '1200px'
    }
  },
  plugins: [],
};
