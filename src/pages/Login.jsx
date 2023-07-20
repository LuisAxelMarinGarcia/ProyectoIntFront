import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AuthForm.css';

function Login() {
  const [message, setMessage] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
      email: email,
      password: password
    };

    axios.post('http://3.224.141.144/api/auth/token', data)
      .then(response => {
        // Manejar la respuesta exitosa
        console.log(response.data);
        setMessage('Registro realizado con éxito!');
      })
      .catch(error => {
        // Manejar el error
        console.error(error);
      });
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
