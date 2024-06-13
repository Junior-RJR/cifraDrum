import React from 'react';
import '../../components/css/MusicasLista.css';
import Musicas from './Musicas';

const MusicasLista = ({ musica, pausado, velocidade }) => {
  return (
    <div className="musicas-lista">
      <div className="controles">
      </div>
      <div className="musicas-container">
        <Musicas musica={musica} pausado={pausado} velocidade={velocidade} />
      </div>
    </div>
  );
};

export default MusicasLista;
