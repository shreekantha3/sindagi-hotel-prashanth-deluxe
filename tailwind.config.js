/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#FFFBEB',100:'#FEF3C7',500:'#D97706',600:'#B45309',700:'#92400E' },
        navy: { DEFAULT:'#0F2440', dark:'#0A182E', light:'#1E3A5C', 50:'#EDF1F7' },
        cream: '#F7F5F0',
        ink: '#171C26'
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
