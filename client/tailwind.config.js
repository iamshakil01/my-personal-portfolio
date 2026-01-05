/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "primary-light": "#A78BFA",
        "primary-dark": "#5B21B6",
        "background-light": "#F3F4F6",
        "background-dark": "#0F172A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
