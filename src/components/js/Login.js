import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/Login.css';
import logo from '../../assets/images/RJR-Branco.png';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if ((usuario === 'junior' && senha === '3009') || 
    (usuario === 'bruno' && senha === '123') || 
    (usuario === 'batera' && senha === '0000')) 
    
    {
      localStorage.setItem('authToken', 'authenticated'); 
      navigate('/home');
    } else {
      setError('vish... errou tenta dnv aee'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="Logo" className="login-logo" />
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <div className="login-form">
          <input 
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="login-input"
          />
          <input 
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
            inputMode="numeric" // Mostra o teclado numérico
            pattern="[0-9]*" 
          />
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleLogin} className="login-button">Logar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
