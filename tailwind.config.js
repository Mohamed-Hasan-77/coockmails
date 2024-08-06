/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BlueLight: 'rgb(55, 181, 255)',
        BlueDark: '#000cef',
        counterBack: '#efefef',
        btnBack: 'rgb(31, 46, 70)',
        lightGrayBack: 'rgb(245, 246, 248)',
        noRiskBack: 'rgb(255, 160, 122)',
        darkBlue: 'rgba(26, 9, 63, 1)',
        mainBlue: '#1f54b5',
        mainRed: '#e52124',
        mainYellow: '#ffec00',
        blueColor: "#2E266F",
        redColor: "#FE043C",
        grayColor: "#707070",
        yellowColor: "#31A24C",
        backGroundColor: "#E4E4E4",
        whiteColor: "#FFF5EC",
        white2Color: "#FFEDDE",
        BackgroundColor: "#E4E4E4",
        backGrad: "linear-gradient(103deg, rgba(204,204,204,0.26943277310924374) 0%, rgba(255,255,255,0) 99%)"
      },
      boxShadow: {
        cardShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px'
      },
      backgroundImage: {
        BlueLinearBtn: 'linear-gradient(90deg, rgb(0 94 203) 0%, rgb(7 26 79) 100%)',
      },
      container: {
        center: true,
        screens: {
          'xs': '320px',    // Extra Small devices (mobile)
          'sm': '420px',    // Small devices (large mobile)
          'md': '768px',    // Medium devices (tablets)
          'lg': '1024px',   // Large devices (desktops)
          'xl': '1280px',   // Extra Large devices (large desktops)
          '2xl': '1536px',  // Double Extra Large devices
        },
        padding: {
          DEFAULT: "3rem",
          // mobile: "1rem",
          // tablet: "2rem",
          // desktop: "3rem",
          'xs': '1rem',    // Extra Small devices (mobile)
          'sm': '1rem',    // Small devices (large mobile)
          'md': '2rem',    // Medium devices (tablets)
          'lg': '3rem',   // Large devices (desktops)
          'xl': '3rem',   // Extra Large devices (large desktops)
          '2xl': '3rem',
        },
      },
      fontSize: {
        xsm: '12px',
      }
    },
    
  },
  plugins: [],
}

