import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

function VoltageData() {
  const { isLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.224.141.144/api/voltsensor/volt');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="sensor">
        <h3>Voltaje</h3>
        <p className="placeholder">Inicia sesión para ver los datos</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sensor">
        <h3>Voltaje</h3>
        <p className="error-message">Error al obtener los datos de voltaje: {error}</p>
      </div>
    );
  }

  return (
    <div className="sensor">
      <h3>Voltaje</h3>
      <p className="data">{data ? `${data} V` : 'Cargando datos...'}</p>
    </div>
  );
}

export default VoltageData;
