import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import musicasData from '../../components/js/MusicasData';
import '../../components/css/Musicas.css';

const Musicas = () => {
  const { nomeMusica } = useParams();
  const musica = musicasData.find(m => m.nome === decodeURIComponent(nomeMusica));

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(5); 
  const letraRef = useRef(null);

  useEffect(() => {
    if (isScrolling) {
      const scrollInterval = setInterval(() => {
        if (letraRef.current) {
          letraRef.current.scrollTop += scrollSpeed;
        }
      }, 100 - scrollSpeed * 5); 
      return () => clearInterval(scrollInterval);
    }
  }, [isScrolling, scrollSpeed]);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const increaseSpeed = () => {
    if (scrollSpeed < 10) {
      setScrollSpeed(scrollSpeed + 1);
    }
  };

  const decreaseSpeed = () => {
    if (scrollSpeed > 0) {
      setScrollSpeed(scrollSpeed - 1);
    }
  };

  if (!musica) {
    return <div>Música não encontrada</div>;
  }

  return (
    <div className="musica-container">
        <div className="voltar-button">
        <Link to="/home">Voltar</Link>
      </div>
      <h1 className='titleMusic'>{musica.nome}</h1>
      <div className="comandos">
        <button onClick={toggleScrolling}>{isScrolling ? 'Pausar Rolagem' : 'Iniciar Rolagem'}</button>
        <button onClick={increaseSpeed}>Aumentar Velocidade</button>
        <button onClick={decreaseSpeed}>Diminuir Velocidade</button>
      </div>
      <div className="letra-container" ref={letraRef}>
        <div className="letra">
          {musica.letra.split('\n').map((line, index) => (
            <p key={index}>
              {line.trim().startsWith('*') ? (
                <span className="comando-destaque">{line.trim()}</span>
              ) : (
                line
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Musicas;
