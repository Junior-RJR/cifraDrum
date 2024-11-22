import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GrupoData from '../../components/js/GrupoData'; 
import '../../components/css/ListaMusicas.css';
import Header from './Header';

const MusicasDoCulto = () => {
  const { cultoId } = useParams();
  const navigate = useNavigate();

  const musicas = GrupoData[cultoId] || []; 
  const [searchTerm, setSearchTerm] = useState('');

  const normalizeString = (str) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filteredMusicas = musicas.filter((musica) =>
    normalizeString(musica.nome).includes(normalizeString(searchTerm))
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="lista-musicas">
        <header>
            <Header />
        </header>
      <input
        type="text"
        placeholder="Pesquisar música..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <h2>Músicas do Culto</h2>
      <div className="musicas-grid">
        {filteredMusicas.length === 0 ? (
          <p>Nenhuma música encontrada para este culto.</p>
        ) : (
          filteredMusicas.map((musica, index) => (
            <button
              key={index}
              className="musica-button"
              onClick={() => navigate(`/musica/${encodeURIComponent(musica.nome)}`)}
            >
              {musica.nome}
            </button>
          ))
        )}
      </div>
      <button
        className="musica-button"
        style={{ marginTop: '20px' }}
        onClick={() => navigate('/setlist')}
      >
        Voltar
      </button>
    </div>
  );
};

export default MusicasDoCulto;
