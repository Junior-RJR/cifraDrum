import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/ListaMusicas.css';
import Header from './Header';

const SetList = () => {
  const navigate = useNavigate();

  const cultos = [
    { id: 'umadesa2025', name: 'Umadesa 2025' },
    { id: 'playlistCulto', name: 'PlayList Culto' },
    { id: 'cultoBatismo', name: 'Bastismo' },
    { id: 'filhaAmada', name: 'Filha Amada' },
  ];

  const handleClick = (cultoId) => {
    navigate(`/setlist/${cultoId}`); 
  };

  return (
    <div className="lista-musicas">
      <header>
        <Header />
      </header>
      <h2>Selecione o Culto</h2>
      <div className="musicas-grid">
        {cultos.map((culto) => (
          <button
            key={culto.id}
            className="musica-button"
            onClick={() => handleClick(culto.id)}
          >
            {culto.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SetList;
