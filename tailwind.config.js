/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  content: [],
  theme: {
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        }
    },
  },
  plugins: [],
}
