/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
        "spin": {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin": "spin 2s linear infinite",
      },
      colors: {
        "theme-color-highlight": "#00FFFB",
        "theme-color-header": "#002B3F",
        "theme-color-primary": "#03253A",
        "theme-color-secondary": "#00252D",
        "theme-color-tertiary": "#031A26",
        "theme-text-color": "#c4c4c4",
        "theme-text-color-highlight": "#ffffff"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}