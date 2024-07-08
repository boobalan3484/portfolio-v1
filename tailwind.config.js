/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'name': "clamp(2rem, 5vw, 2.6rem)",
        'profession': "clamp(1.3rem, 2vw, 1.6rem)",
        'tagline': "clamp(.7rem, 4vw, 1rem)",
      },
      fontFamily: {
        'alegreya': ['Alegreya Sans SC', 'sans-serif'],
        'backsteal':['Backsteal'],
      },
      colors:{
        'purBlack':['#504968']
      },
      backgroundImage: {
        'gradient':['linear-gradient(to right, #3a6186, #3a8286)'],
        'gradient1':['linear-gradient(to right, #3a6186, #752c43)'],
        'Nav': ['linear-gradient(-225deg, #e3fdf595 0%, #ffe6fa98 100%)'],
        'Track': ['linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'],
        'Bar': ['linear-gradient(to top, #30cfd0 0%, #330867 100%)'],
        'aqua': ['linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'],
        'navGrad':['linear-gradient(to right, #3a6186cf, #3a8286cf)']
      }
    },
  },
  plugins: [],
}