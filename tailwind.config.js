/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'Fallback Font', 'sans-serif'], // แก้ชื่อและเพิ่ม fallback font ตามต้องการ
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
