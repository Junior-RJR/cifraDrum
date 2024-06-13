import React from 'react';
import Header from '../../components/js/Header';
import ListaMusicas from '../../components/js/ListaMusicas'
import Footer from '../../components/js/Footer'

const Home = () => {
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
