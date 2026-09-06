/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#121212',
        charcoal: '#1E1E1E',
        gold: '#FFD700',
        crimson: '#DC143C',
        offwhite: '#F5F5F5',
        muted: '#B3B3B3',
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #E5B800 100%)',
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(255, 215, 0, 0.35)',
        'gold-lg': '0 20px 60px -15px rgba(255, 215, 0, 0.45)',
      },
    },
  },
  plugins: [],
}
