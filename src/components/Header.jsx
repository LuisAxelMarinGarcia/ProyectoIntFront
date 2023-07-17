import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="images/logo.png" alt="Logo" />
        </Link>
      </div>
      <h1 className="title">SISTEMA DE MONITOREO DE CORRIENTE Y VOLTAJE</h1>
    </header>
  );
}

export default Header;
