// Register.jsx
import React from 'react';
import '../styles/AuthForm.css';

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Registrarse</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
