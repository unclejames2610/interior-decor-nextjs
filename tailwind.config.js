/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/assets/hero-image.svg')",
      },
      colors: {
        primary: "rgba(255, 255, 255, 0.30)",
        fontBlack: "#081323",
        fontGray: "#828282",
        overlay: "rgba(0, 0, 0, 0.30)",
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
