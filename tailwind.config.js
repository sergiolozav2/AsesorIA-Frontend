import tailwindCssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tailwindCssAnimate],
  theme: {
    extend: {
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
          900: "#2A183D",
          950: "#2A183D",
        },
      },
    },
  },
};
