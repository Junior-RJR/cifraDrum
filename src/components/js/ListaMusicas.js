import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/ListaMusicas.css';

const ListaMusicas = () => {
  const navigate = useNavigate();

  const musicas = [
    // '500 graus',
    // 'Louve',
    // 'Medley, Corinho de Fogo',
    'Escape',
    'Jeová Jireh',
    'Clamo Jesus',
    // 'Ele Vem',
    // 'Eu Te Louvarei',
    'Na Unção de Deus',
    'Quem é como nosso Deus',
    'Dependente',
  ];

const [searchTerm, setSearchTerm] = useState('');

const handleButtonClick = (musica) => {
  navigate(`/musica/${encodeURIComponent(musica)}`);
};

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredMusicas = musicas.filter((musica) =>
  musica.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(
    searchTerm.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  )
);

return (
  <div className="lista-musicas">
    <input
      type="text"
      placeholder="Pesquisar música..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="search-input"
    />
    <h2>Selecione a Música</h2>
    <div className="musicas-grid">
      {filteredMusicas.map((musica, index) => (
        <button
          key={index}
          className="musica-button"
          onClick={() => handleButtonClick(musica)}
        >
          {musica}
        </button>
      ))}
    </div>
  </div>
);
};

export default ListaMusicas;

