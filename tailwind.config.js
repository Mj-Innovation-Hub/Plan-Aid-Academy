/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0F8B9E",
          600: "#0d7788",
          700: "#0b606f",
          800: "#0c4e5a",
          900: "#0e414b",
        },
        navy: {
          50: "#f4f6fa",
          100: "#e6eaf3",
          200: "#cdd6e7",
          300: "#a6b9d6",
          400: "#7995c0",
          500: "#5676aa",
          600: "#415c8f",
          700: "#354a74",
          800: "#2e3e60",
          900: "#1B2A4A",
          950: "#101a30",
        },
        brand: {
          lightest: "#cfecf7",
          light: "#a0d9ef",
          medium: "#62c1e5",
          primary: "#0F8B9E",
          dark: "#1B2A4A",
        },
        royal: {
          50: "#f0f4fe",
          100: "#e1e9fe",
          200: "#c5d5fc",
          300: "#99b6fa",
          400: "#658bf6",
          500: "#0F8B9E",
          600: "#0d7788",
          700: "#1B2A4A",
          800: "#15223c",
          900: "#1B2A4A",
          950: "#101a30",
        },
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0F8B9E",
          600: "#0d7788",
          700: "#0b606f",
          800: "#0c4e5a",
          900: "#0e414b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["Traditional Arabic", "Amiri", "Scheherazade New", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        soft: "0 10px 30px -5px rgba(32, 167, 219, 0.12)",
      }
    },
  },
  plugins: [],
};
