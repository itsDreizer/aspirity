import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textMain: "rgb(225, 227, 230)",
        bgSecondary: "rgb(35, 35, 36)",
        mainGray: "rgb(118, 120, 122)",
      },
      screens: {
        1100: "1100px",
      },
    },
  },
  plugins: [],
};
export default config;
