/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      dark: "#131313",
      white: "#FFF",
      cyan50: "#EEFDFF",
      cyan100: "#DFF9F7",
      cyan200: "#B3ECE9",
      cyan300: "#2FA9A9",
      cyan500: "#00BFB3",
      cyan600: "#017F77",
      cyan700: "#2D8289",
      cyan750: "rgba(0, 191, 179, 0.8)", //home carousel background color hover
      cyan800: "rgba(0, 191, 179, 0.6)", //home carousel background color

      pink100: "#FBE7E9",
      pink300: "#F17179",
      pink400: "#D34566",
      pink500: "#F66C85",

      blue100: "#E0F6FF",
      blue300: "#5796AF",

      yellow100: "#FFF7C6",
      yellow300: "#F9A51A",

      brown100: "#FADEB9",
      brown300: "#BB7E2C ",

      gray50: "#F4F4F4",
      gray100: "#C4C4C4",
      gray150: "#F6F6F6",
      gray200: "#7B7C7F",
      gray250: "rgba(255, 255, 255, 0.3)",
      gray300: "#666666",
      gray400: "#555555",
      gray500: "#4F4F4F",
      gray600: "#323232",
      gray800: "rgba(0, 0, 0, 0.03)", // input border disabled
      gray850: "rgba(0, 0, 0, 0.2)", // input border
      gray900: "rgba(0, 0, 0, 0.3)", // viewport background color
      gray950: "rgba(0, 0, 0, 0.5)",

      offWhite: "rgba(252, 250, 240, 1)", // background crib kit page
      purple300: "#8E7BB7",

      transparent: "transparent",

      /**** Status - Colors  ****/
      green300: "#d9f57d",
      green400: "#abf57d",
      orange200: "#ffd08a",
      yellow200: "#f5ef7d",
      red100: "#ff8a8a",
      red50: "#fca5a5",
      red: "#ff0000",

      "black-Loading": "rgba(0, 0, 0, 0.54)",
      "black-OrderBy": "rgba(0,0,0,30%)",
    },

    extend: {
      maxWidth: {
        container: "1360px",
      },
      screens: {
        xs2: "100px",
        xs: "320px",
        sm2: "400px",
        sm: "450px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
      backgroundImage: {
        "music-background":
          "linear-gradient(to right, rgba(4,4,4, 0.7), rgba(4,4,4, 0.7)), url('https://res.cloudinary.com/gomesdev/image/upload/v1702762927/marioguitarman/IMG_1111_1_1_osfdzr.png')",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(1.2)" },
          "100%": { transform: "translateY(1)" },
        },
        "up-card": {
          from: {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "up-card": "up-card 0.8s",
      },
    },
  },
  plugins: [],
};
