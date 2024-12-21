/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.25: "1px",
        2.5: "10px",
        4.5: "18px",
        5.25: "21px",
        5.5: "22px",
        18.5: "75px",
        19: "76px",
        19.25: "77px",
        19.5: "78px",
        6.75: "27px",
        28.5: "114px",
        30: "120px",
        34.25: "137px",
        43: "172px",
        54.5: "218px",
        66.75: "267px",
        135: "540px",
      },
      fontSize: {
        46: "46px",
      },
      colors: {
        customGray: "#E2E2E2",
        indigo: "#6358DC",
        darkPurple: "#1C1B1F",
        lightGray: "#BFBFBF",
        offWhite: "#F4F4F4",
        gray: "D9D9D9",
        darkGray: "#383838",
      },
      borderRadius: {
        5: "20px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        4.8: "19.36px",
        5.42: "21.68px",
        12.19: "48.78px",
        15.58: "62.33px",
      },
      boxShadow: {
        custom: "0px 4px 14px 0px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        mobile: { max: "767px" },

        tablet: { min: "768px", max: "1023px" },
      },
    },
  },
  plugins: [],
};
