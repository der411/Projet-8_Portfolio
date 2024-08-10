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
        'footer-dark': '#C75000',
        'footer': '#cad5d8',
        'git-dark': '#7E7E77',
        'card': '#596b7f',
        'nav' : '#e1e1e0',
        'nav-dark': '#595959',
        'git': '#E5EAEB',
        'custom-blue': '#596b7f',
        'custom-blue-dark': '#3e4d5e'
      },
      boxShadow: {
        'inner-custom': 'inset 0 0 60px 0 rgba(13, 13, 13, 0.6)', // Ombre en creux avec couleur #0D0D0D
      },
    },
  },
  plugins: [],
}