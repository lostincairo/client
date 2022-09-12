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
    colors: {
      'white': '#FFFFFF',
      'sand': '#EAD8AE',
      'beige': '#C6B080',
      'olive': '#727A52',
      'charcoal': '#405064',
      'earth': '#6A4024',
    }
  },
  plugins: [],

}
