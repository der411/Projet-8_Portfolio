/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tous les fichiers JS, JSX, TS, et TSX dans le dossier src
    './public/index.html' // Le fichier HTML principal
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#0D0D0D',
        'border-card': '#1A1A1A',
        'icon': '#2A2A28',
        'footer': '#D35400',
        'icon-git': '#7E7E77'
      },
      boxShadow: {
        'inner-custom': 'inset 0 0 60px 0 rgba(13, 13, 13, 0.6)', // Inset shadow avec couleur #0D0D0D
      },
    },
  },
  plugins: [],
}