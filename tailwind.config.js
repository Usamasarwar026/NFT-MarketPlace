/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "#A259FF",
        hover:"#8664b3",
        backgroundColor: "#2B2B2B",
        text:"#CCCCCC",
        
      },
    },
  },
  plugins: [],
}

