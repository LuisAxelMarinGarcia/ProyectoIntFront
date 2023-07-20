import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../styles/Header.css';

function Header() {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

  const toggleMenu = () => {
    // Toggle menu logic
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="header-content">
        <center><h1 className="title">SISTEMA DE MONITOREO DE CORRIENTE Y VOLTAJE</h1></center>
        <button onClick={toggleMenu} className="menu-button">
          ☰
        </button>
        <nav className="nav">
          <ul>
            {isLoggedIn ? (
              <li><button onClick={handleLogout}>Cerrar sesión</button></li>
            ) : (
              <>
                <li><Link to="/register">Registrarse</Link></li>
                <li><Link to="/login" onClick={handleLogin}>Iniciar Sesión</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
