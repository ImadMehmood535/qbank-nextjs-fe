/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        themePrimary: ["#3F7FAE"],
        themeSecondry: ["#243656"],
        themeSecondryDark: ["#202E48"],
        themeGray: ["#FAFAFA"],
        themeButton: ["#C70048"],
        themeButtonHover: ["#B30040"],
        themeBtn: ["#3F7FAE"],
      },
    },
  },
  plugins: [],
};
