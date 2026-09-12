/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Extra small breakpoint: most 80% of traffic is a 360-430px phone.
      screens: {
        xs: "400px",
      },
      colors: {
        // Brand: ocean blue + bright white
        ocean: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#062f4a",
        },
        ink: "#0b1622",
      },
      fontFamily: {
        // System stack = zero web-font requests = instant text render on 4G.
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.06), 0 8px 24px -12px rgba(15,23,42,.18)",
        cta: "0 12px 28px -12px rgba(2,132,199,.75)",
      },
      keyframes: {
        softPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        "soft-pulse": "softPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
