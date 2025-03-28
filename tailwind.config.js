/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Badge backgrounds
    "bg-blue-600",
    "bg-green-600",
    // Gradient backgrounds
    "from-blue-100",
    "to-blue-200",
    "from-green-100",
    "to-green-200",
    "dark:from-blue-900",
    "dark:to-blue-800",
    "dark:from-green-900",
    "dark:to-green-800",
    // Text colors
    "text-blue-500",
    "text-green-500",
    "text-blue-700",
    "text-green-700",
    "dark:text-blue-400",
    "dark:text-green-400",
    "dark:text-blue-300",
    "dark:text-green-300",
    // Feature tags
    "bg-blue-100",
    "bg-green-100",
    "bg-orange-100",
    "bg-emerald-100",
    "bg-lime-100",
    "text-blue-800",
    "text-green-800",
    "text-orange-800",
    "text-emerald-800",
    "text-lime-800",
    "dark:bg-blue-900",
    "dark:bg-green-900",
    "dark:bg-orange-900",
    "dark:bg-emerald-900",
    "dark:bg-lime-900",
    "dark:text-blue-200",
    "dark:text-green-200",
    "dark:text-orange-200",
    "dark:text-emerald-200",
    "dark:text-lime-200",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
