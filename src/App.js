import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/js/Login';
import Home from './components/js/Home';
import SetList from './components/js/SetList';
import MusicasDoCulto from './components/js/MusicasDoCulto';
import Musicas from './components/js/Musicas';

const ProtectedRoute = ({ element }) => {
  const authToken = localStorage.getItem('authToken');
  return authToken ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/setlist" element={<ProtectedRoute element={<SetList />} />} />
        <Route path="/musica/:nomeMusica" element={<ProtectedRoute element={<Musicas />} />} />
        <Route path="/setlist/:cultoId" element={<MusicasDoCulto />} />
      </Routes>
    </Router>
  );
};

export default App;
