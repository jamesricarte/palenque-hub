/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-semibold": ["Poppins-SemiBold"],
      },
      colors: {
        "primary-color": "#F16B44",
        "secondary-color": "#F69C82",
        "tertiary-color": "#39B54A",
        "red-errors": "#F44336",
        "light-grey": "#F5F5F5",
        "dark-grey": "#9E9E9E",
      },
    },
  },
  plugins: [],
};
