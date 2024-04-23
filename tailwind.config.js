import tailwindCssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontSize: {
        sm: "15px",
      },
      width: {
        "admin-navbar": "var(--admin-navbar-width)",
        "module-navbar": "var(--module-navbar-width)",
      },
      minWidth: {
        "admin-navbar": "var(--admin-navbar-width)",
        "module-navbar": "var(--module-navbar-width)",
      },
      maxWidth: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      margin: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      colors: {
        primary: {
          50: "#f2effe",
          100: "#e6e1fe",
          200: "#d5c9fc",
          300: "#bca8f9",
          400: "#a985f4",
          500: "#9d68ec",
          600: "#924cdf",
          700: "#823dc5",
          800: "#68349f",
          900: "#55317e",
          950: "#2A183D",
        },
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
