/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('https://v2.cimg.co/news/114962/277344/aidoge.jpg')",
      },
      fontFamily: {
        abc: ["Poppins", "sans-serif"],
      },
      textShadow: {
        normal: "0 3px 4px rgba(0, 0, 0, 0.5) ",
      },
    },
  },
  plugins: [],
};
