import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/ListaMusicas.css';

const ListaMusicas = () => {
  const navigate = useNavigate();

  const musicas = [
    '500 graus',
    'Louve',
    'Estamos de Pé',
    // 'Medley, Corinho de Fogo',
    'Escape',
    'Jeová Jireh',
    'Clamo Jesus',
    'Santo pra Sempre',
    // 'Ele Vem',
    'Eu Te Louvarei',
    'Na Unção de Deus - PRAISE',
    'Quem é como nosso Deus',
    'Dependente',
    'Sala do Trono',
    'Maranata',
    'Força Igreja',
    'Canção que não envelhece',
    'Canção de Simeão',
    'Digno é o Senhor',
    'Tu és Santo',
    'Não há Barreiras',
    'A Vitória da Cruz',
    'O Leão e o Cordeiro',
    'O nosso general é Cristo - Lis Avancini',
    'Te Agradeço - PC Baruk',
    'Ele Vem - PRAISE',
    'Ditosa Cidade',
    'Abraço do Noivo',
    'Casa do Pai',
    'O medo não vai me parar',
    'Lindo Momento',
    'Ele Cumprirá',
    'Sinto fluir',
    'Pai de Amor',
    'Se Deus é por nós',
    'Yeshua - Julliany Souza',
    'A tua mesa cura',
    'Colossenses 1 e Da Vida, o Melhor',
    'Diante da Cruz',
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

