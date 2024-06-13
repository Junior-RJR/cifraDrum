import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/css/Login.css';
import logo from '../../assets/images/RJR-Branco.png';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(usuario, senha);
    navigate('/home');
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
          />
          <button onClick={handleLogin} className="login-button">Logar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
