import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContextProvider } from './components/AuthContext';

function App() {
  return (
    <Router>
      <AuthContextProvider> {/* Agregar el proveedor de contexto de autenticación */}
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </AuthContextProvider> {/* Cerrar el proveedor de contexto de autenticación */}
    </Router>
  );
}

export default App;
