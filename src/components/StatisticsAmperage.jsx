import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function StatisticsAmperage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [media, setMedia] = useState(null);
  const [desviacion, setDesviacion] = useState(null);
  const [varianza, setVarianza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const mediaResponse = await axios.get('http://3.224.141.144/api/ampsensor/media');
          const desviacionResponse = await axios.get('http://3.224.141.144/api/ampsensor/standardDeviation');
          const varianzaResponse = await axios.get('http://3.224.141.144/api/ampsensor/variance');

          setMedia(mediaResponse.data);
          setDesviacion(desviacionResponse.data);
          setVarianza(varianzaResponse.data);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="statistics-subsection">
        <h3>Corriente</h3>
        <p className="placeholder">Inicie sesión para ver los datos</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="statistics-subsection">
        <h3>Corriente</h3>
        <p className="error-message">Error al obtener los datos: {error}</p>
      </div>
    );
  }

  return (
    <div className="statistics-subsection">
      <h3>Corriente</h3>
      <div className="statistic">
        <h4>Media</h4>
        <p className="data">{media ? media : '--'}</p>
      </div>
      <div className="statistic">
        <h4>Desviación Estándar</h4>
        <p className="data">{desviacion ? desviacion : '--'}</p>
      </div>
      <div className="statistic">
        <h4>Varianza</h4>
        <p className="data">{varianza ? varianza : '--'}</p>
      </div>
    </div>
  );
}

export default StatisticsAmperage;
