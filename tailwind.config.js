/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        linearBlack:
          'linear-gradient(to right bottom, #444348 0%, #3A393D 9%, #2F2F31 37%, #1A1A1A 93%)',
        frontendMentorLite: 'url("/assets/Desktop/frontend_mentor_lite.svg")',
        frontendMentor: 'url("/assets/Desktop/frontend_mentor.svg")',
      },
      colors: {
        blackCustom: '#1A1A1A',
        lightWhite: '#FCFBFC',
        paragraph: '#777777',
        grayDark: '#3F4352',
        iconColor: '#898989',
        // greenDark: '#375B41',
        greenDark: '#447e54',
        // greenLight: '#bfe959',
        greenLight: '#8daf6b',
      },
      fontFamily: {
        Roboto: ['"Roboto"', 'sans-serif'],
        Josefin_Sans: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
