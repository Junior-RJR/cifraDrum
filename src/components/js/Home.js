import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/js/Header';
import ListaMusicas from '../../components/js/ListaMusicas'
import Footer from '../../components/js/Footer'

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/'); 
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <ListaMusicas />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
