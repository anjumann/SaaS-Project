/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary-purple": "#8976fd",
        "bright-grey": "#332c5c",
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)'],
        prompt: ['var(--font-prompt)'],
      },
    },
  },
  plugins: [],
}
