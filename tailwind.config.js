/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": '#183253',
        "subMain": '#07B8DB',
        "text":"#f2f9fa",
        "textGray":"#a0a0a0",
        "border":"#e8edee",
        "dry":"#f8fafa",
        "greyed":"#f5f7f8"
      },
      screens:{
        'xs': '475px',
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}