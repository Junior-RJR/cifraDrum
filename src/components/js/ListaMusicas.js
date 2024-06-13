import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/ListaMusicas.css';

const ListaMusicas = () => {
  const navigate = useNavigate();

  const musicas = [
    '500 graus',
    'Louve',
    'Medley, Corinho de Fogo',
    'Escape',
    'Jeová Jireh',
    'Clamo Jesus',
    'Ele Vem',
    'Eu Te Louvarei',
    'Na Unção de Deus'
  ];

  const handleButtonClick = (musica) => {
    console.log(`Navegar para a página da música: ${musica}`);
    navigate(`/musica/${encodeURIComponent(musica)}`);
  };

  return (
    <div className="lista-musicas">
      {musicas.map((musica, index) => (
        <button 
          key={index} 
          className="musica-button" 
          onClick={() => handleButtonClick(musica)}
        >
          {musica}
        </button>
      ))}
    </div>
  );
};

export default ListaMusicas;
