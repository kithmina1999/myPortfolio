/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'poppins':['Poppins','sans-serif']
      },
      colors: {
       'txt-color':'#070808',
       'bg-color':'#EBEFEE',
       'primary-color':'#1B3D5F',
       'secondory-color':'#D7D7F4',
       'accent':'#3838C7',
       'color-gradient':'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(215,215,244,1) 50%, rgba(27,61,95,1) 100%) '
      }
    },
    
  },
  plugins: [],
}

