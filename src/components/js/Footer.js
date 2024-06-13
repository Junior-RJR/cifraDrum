import React from 'react';
import '../css/Footer.css';
import Logo from '../../assets/images/logoKJR.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div className="footer-text">
          <p>&copy; 2024 KJR Desenvolvimento</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
