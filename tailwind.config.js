module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF9D65',
        'primary-teal': '#DDEBEC',
        'dark-teal': '#92ABAE',
        
      }
    },
  },
  plugins: [require("daisyui")],
}
