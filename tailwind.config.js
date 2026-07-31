/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#60a5fa',
        'dark-primary': '#1e40af',
        'dark-secondary': '#377dff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
