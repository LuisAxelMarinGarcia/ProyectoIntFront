import React, { useContext } from 'react';
import '../styles/home.css';
import VoltageChart from '../components/VoltageChart';
import AmperageChart from '../components/AmperageChart'; 
import Statistics from '../components/Statistics';
import SensorData from '../components/SensorData';
import { AuthContext } from '../components/AuthContext';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <main>
        <section id="intro">
          <h2>Bienvenido al Sistema de Monitoreo de Corriente y Voltaje</h2>
          <p>Monitoreamos en tiempo real los datos de voltaje y corriente de tu hogar para mantener todo bajo control.</p>
        </section>
        <SensorData isLoggedIn={isLoggedIn} /> {/* Pasa la prop isLoggedIn */}
        <section id="charts">
          <h2>Gráficas en Tiempo Real</h2>
          <div className="chart-container">
            <div className="chart-item">
              <h3>Voltaje</h3>
              <div className="chart">
                <VoltageChart />
              </div>
            </div>
            <div className="chart-item">
              <h3>Corriente</h3>
              <div className="chart">
                <AmperageChart />
              </div>
            </div>
          </div>
        </section>
        <Statistics />
      </main>
    </div>
  );
}

export default Home;
