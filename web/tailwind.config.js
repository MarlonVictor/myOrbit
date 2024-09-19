/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pure': 'rgb(245, 130, 130)',
        'primary-light': 'rgb(253, 184, 138)',
        'primary-extraLight': 'rgb(254, 230, 213)',
  
        'secondary-pure': 'rgb(236, 72, 153)',
        'secondary-light': 'rgb(244, 114, 182)',
  
        'neutral-95': 'rgb(29, 29, 29)',
        'neutral-90': 'rgb(33, 33, 32)',
        'neutral-70': 'rgb(82, 82, 82)',
        'neutral-50': 'rgb(112, 112, 112)',
      },
    }
  },
  plugins: [],
}