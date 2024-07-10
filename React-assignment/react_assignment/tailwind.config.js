/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-gray-500',
    'bg-yellow-500',
    'bg-black',
    'hover:bg-blue-700',
    'hover:bg-green-700',
    'hover:bg-orange-700',
    'hover:bg-red-700',
    'hover:bg-purple-700',
    'hover:bg-gray-700',
    'hover:bg-yellow-700'
    // Add other classes you dynamically use
  ],
  theme: {
    extend: {
      height: {
        '30': '7.5rem',
      },
      width: {
        '30': '7.5rem'
      }
    },
  },
  plugins: [],
}