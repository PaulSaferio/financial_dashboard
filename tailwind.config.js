module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
          800: '#1e40af'
        },
        chartRed: '#FF6384',
        chartBlue: '#36A2EB',
        chartYellow: '#FFCE56',
        chartTeal: '#4BC0C0'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}

