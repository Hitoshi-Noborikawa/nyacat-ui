import nekoUI from './src/index.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./demo/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [nekoUI],
}