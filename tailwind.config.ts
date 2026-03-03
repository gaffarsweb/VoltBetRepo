import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        card: "#141B2D",
        primary: "#00FFB2",
        secondary: "#2979FF",
      },
    },
  },
  plugins: [],
};

export default config;