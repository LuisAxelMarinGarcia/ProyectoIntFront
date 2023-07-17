// Login.jsx
import React from 'react';
import '../styles/AuthForm.css';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Iniciar sesión</h2>
        <form>
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
      </div>
    </div>
  );
}

export default Login;
