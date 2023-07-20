import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí debes realizar la lógica de autenticación
    // Por ahora, simplemente estableceremos isLoggedIn en true para simular el inicio de sesión exitoso

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Realizar las acciones necesarias para cerrar sesión
    // Por ejemplo, eliminar el token de acceso o limpiar la sesión en el backend

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
