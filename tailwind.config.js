/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightskyblue: "rgba(156, 197, 238, 0.5)",
        darkslateblue: "#003f87",
        darkslategray: {
          "100": "#373737",
          "200": "#333",
        },
        black: "#000",
        slategray: "#5e7b99",
        lightslategray: "#7894b3",
        lightgray: "#cfcfcf",
        silver: "#b5b5b5",
        gray: {
          "100": "#01070d",
          "200": "#00050a",
        },
        white: "#fff",
        gold: "#ffc107",
      },
      spacing: {},
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "6xl": "25px",
        "11xl": "30px",
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "51xl": "70px",
      "37xl": "56px",
      "23xl": "42px",
      "11xl": "30px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      md: {
        max: "960px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
