import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/Header.css';
import logo from '../../assets/images/RJR-Branco.png';

const Header = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
  };

  return (
    <header className="header">
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </button>
      <img src={logo} alt="Logo" className="header-logo" />
      {menuVisible && (
        <div className="hamburger-menu-list">
          <button className="close-menu" onClick={toggleMenu}>
            &times; 
          </button>
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/setlist')}>Setlist</button>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </header>
  );
};

export default Header;
