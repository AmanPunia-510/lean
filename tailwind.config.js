/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "24px",
        center: "true",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1188px",
        },
      },
      lineHeight: {
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
      fontSize: {
        "custom-3xl": "38px",
        "custom-6xl": "80px",
      },
      colors: {
        "primary-color": "#CD520F",
        "light-black": "#B2B2B2",
        "blue-color": "#2B587F",
        "california-box": "#FFFFFF1A",
        "paragraph-ba": "#BABABA",
        "thin-black": "#4d4d4d",
      },
      boxShadow: {
        "feature-shadow": "0px 11px 24px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
