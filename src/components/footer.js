import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} Event Management App</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li><a href="https://www.instagram.com/muneebrehman.07/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/muneeb-ur-rehman-76b6b1294/">Linked In</a></li>
            <li><a href="https://github.com/MuneebDeveloperr">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;