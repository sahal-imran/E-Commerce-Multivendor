/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        main: {
          brand: "#FFBB38",
        },
        white: {
          main: "#FFFFFF",
          off: "#FFFAEF",
        },
        black: {
          main: "#000000",
          off: "#222222",
          cool: "#797979",
          soft: "#1D1D1D",
        },
        gray: "#EFEFEF",
        lightGray: "#D3D3D3",
        input: "#8E8E8E",
        lavaRed: "#EF2623",
        lightningYellow: "#FFBB38",
        boulder: "#797979",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
