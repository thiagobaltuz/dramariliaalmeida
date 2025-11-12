/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        primary: "#8A2D4A",
        ink: "#111111",
        paper: "#FFFFFF",
        soft: "#F6F2F4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
        hard: "0 10px 40px rgba(0,0,0,.15)",
      },
    },
  },
  plugins: [],
};
