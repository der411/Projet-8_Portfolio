function Footer() {
  return (
    <footer className="bg-footer dark:bg-footer-dark dark:border dark:border-custom-gray dark:shadow-inner-custom border-none shadow-none flex flex-col items-center justify-center py-4 rounded-t-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          <a href="https://x.com/VaitilingomV" target="_blank" rel="noopener noreferrer" aria-label="Voir mon X">
            <i className="fab fa-twitter text-border-card text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
          <a href="https://www.linkedin.com/in/vincent-castillo-711610297/" target="_blank" rel="noopener noreferrer" aria-label="Voir mon LinkedIn">
            <i className="fab fa-linkedin text-border-card text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
        </div>
        <p className="text-black mt-5 mb-5">Portfolio de Vincent Vaitilingom 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
