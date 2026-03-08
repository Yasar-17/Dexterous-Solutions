/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Blue-700 — main brand blue
          light: '#3B82F6', // Blue-500
          dark: '#1E3A8A' // Blue-900
        },
        accent: '#F59E0B', // Amber — used sparingly for highlights
        neutral: {
          bg: '#F8FAFC', // Near-white page background
          card: '#FFFFFF',
          border: '#E2E8F0'
        },
        text: {
          primary: '#0F172A', // Slate-900
          secondary: '#475569' // Slate-600
        }
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1F2937",
        accent: "#1D4ED8",
        white: "#FFFFFF",
      },
      maxWidth: {
        content: "1200px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
