import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../styles/Header.css';

function Header() {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para controlar la visibilidad de la barra de navegación

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
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
        <button onClick={toggleNav} className={`menu-button ${isNavOpen ? 'open' : ''}`}>
          ☰
        </button>
        <nav className={`nav ${isNavOpen ? 'show' : ''}`}>
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
