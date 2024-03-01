import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "plus-jakarta-sans": "PlusJakartaSans, sans-serif",
      },
      fontSize: {
        "headline-1": "44px",
        "headline-2": "35px",
        "headline-3": "28px",
        "headline-4": "25px",
        "headline-5": "22px",
        "headline-6": "20px",
        "headline-7": "18px",
        "headline-8": "16px",
        "headline-9": "14px",
        "headline-10": "12px",
      },
      animation: {
        "gradient-x": "gradient-x 7s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "100% 50%",
            "background-position": "center center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
