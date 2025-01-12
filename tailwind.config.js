/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        bitter: ["Bitter", "serif"],
      },
      colors: {
        nightblue: "var(--night-blue)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        float: "float 15s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
