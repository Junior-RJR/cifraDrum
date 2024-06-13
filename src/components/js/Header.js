import React from 'react';
import '../../components/css/Header.css';
import logo from '../../assets/images/RJR-Branco.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
    </header>
  );
};

export default Header;
