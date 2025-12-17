module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        ui: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          muted: 'var(--color-muted)'
        }
      },
      spacing: {
        '9': '2.25rem'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
}