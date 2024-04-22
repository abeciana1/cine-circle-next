import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-dark': '#181818',   // Very dark (mostly black) background
        'netflix-light': '#222222',  // Dark gray (secondary background)
        'netflix-red': '#E50914',    // Bright red (primary elements and accents)
        'netflix-gray': '#757575',   // Medium gray (secondary text)
        'netflix-light-gray': '#b3b3b3', // Light gray (placeholders and borders)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
