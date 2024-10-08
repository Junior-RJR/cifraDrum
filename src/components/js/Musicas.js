import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import musicasData from '../../components/js/MusicasData';
import '../../components/css/Musicas.css';

const Musicas = () => {
  const { nomeMusica } = useParams();
  const musica = musicasData.find(m => m.nome === decodeURIComponent(nomeMusica));

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const letraRef = useRef(null);

  const scrollContent = () => {
    if (letraRef.current) {
      const element = letraRef.current;
      element.scrollTop += scrollSpeed; 
    }
  };

  useEffect(() => {
    if (isScrolling) {
      const scrollInterval = setInterval(scrollContent, 50);
      return () => clearInterval(scrollInterval);
    }
  }, [isScrolling, scrollSpeed]);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    const adjustedSpeed = value / 10;
    setScrollSpeed(adjustedSpeed); 
  };

  if (!musica) {
    return <div>Música não encontrada</div>;
  }

  return (
    <div className="musica-container">
      <div className="voltar-button">
        <Link to="/home">Voltar</Link>
      </div>
      <h1 className="titleMusic">{musica.nome}</h1>
      <div className="comandos">
        <button onClick={toggleScrolling} className="desktop-button">
          {isScrolling ? 'Pausar Rolagem' : 'Iniciar Rolagem'}
        </button>
        <button onClick={toggleScrolling} className="mobile-button">
          {isScrolling ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={scrollSpeed * 10}
          onChange={handleSliderChange}
          className="scroll-slider"
        />
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
