import React from 'react';
import axios from 'axios';
import '../styles/AuthForm.css';

function Register() {
  function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
      name: name,
      email: email,
      password: password
    };

    axios.post('http://3.224.141.144/api/user', data)
      .then(response => {
        // Manejar la respuesta exitosa
        console.log(response.data);
        window.location.href = '/'; // Redirigir al usuario a la página Home
      })
      .catch(error => {
        // Manejar el error
        console.error(error);
      });
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Registrarse</h2>
        <form onSubmit={handleRegister}>
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
