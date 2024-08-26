import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/Header.css';
import logo from '../../assets/images/RJR-Branco.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/'); 
  };

  return (
    <header className="header">
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
      <img src={logo} alt="Logo" className="header-logo" />
    </header>
  );
};

export default Header;
