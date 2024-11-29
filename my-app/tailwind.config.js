/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#1d4ed8",
        brightColor: "#60a5fa",
        backgroundColor: "#3b82f6",
      },
    },
  },
  plugins: [],
};
