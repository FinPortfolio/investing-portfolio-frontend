/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/constants/colors.constants";

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
};
