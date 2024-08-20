function Footer() {
  return (
    <footer id="reseaux-sociaux" className="bg-footer dark:bg-border-card dark:border dark:border-custom-gray dark:shadow-inner-custom border-none shadow-none flex flex-col items-center justify-center py-4 rounded-t-lg">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          <a
            href="https://x.com/VaitilingomV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon X"
          >
            <i className="fab fa-twitter text-border-card dark:text-white text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-castillo-711610297/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon LinkedIn"
          >
            <i className="fab fa-linkedin text-border-card dark:text-white text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
          <a
            href="https://join.slack.com/t/webdev-hyw5242/shared_invite/zt-2p0a0c6wi-3nXIzhrnbhgrMj7ssoaDWw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon Slack"
          >
            <i className="fa-brands fa-slack text-border-card dark:text-white text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
          <a
            href="https://discord.gg/QqKW5Xskpp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir mon Discord"
          >
            <i className="fa-brands fa-discord text-border-card dark:text-white text-4xl p-5 transform transition-transform hover:scale-110"></i>
          </a>
        </div>
        <p className="text-black text-xs md:text-base mt-5 mb-5 dark:text-white">Portfolio de Vincent Vaïtilingom | 2024 | Open Classrooms</p>
      </div>
    </footer>
  );
}

export default Footer;
