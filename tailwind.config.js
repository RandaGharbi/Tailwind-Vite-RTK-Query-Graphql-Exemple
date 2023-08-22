/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#2F2F2F",
        tertiary: "#3F3F3F",
        quaternary: "#4F4F4F",
        quinary: "#5F5F5F",
        senary: "#6F6F6F",
        septenary: "#7F7F7F",
        octonary: "#8F8F8F",
      },
    },
  },
  plugins: [],
};
