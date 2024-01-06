/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","dracula","wireframe","black"],
  },
  theme: {
    extend: {},
    screens:{
      "sm":{"min":"200px","max":"469px"},
    }
  },
  plugins: [require("daisyui")],
}