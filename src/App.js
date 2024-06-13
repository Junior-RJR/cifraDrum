import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/js/Login';
import Home from './components/js/Home';
import Musicas from './components/js/Musicas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/musica/:nomeMusica" element={<Musicas />} />
      </Routes>
    </Router>
  );
};

export default App;
