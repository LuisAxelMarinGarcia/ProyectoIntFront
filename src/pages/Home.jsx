import React from 'react';
import '../styles/home.css';
import VoltageChart from '../components/VoltageChart';
import AmperageChart from '../components/AmperageChart'; 

function Home() {
  return (
    <div className="App">
      <main>
        <section>
          <h2>Datos del Sensor</h2>
          <div id="sensor-data">
            <div className="sensor">
              <h3>Voltaje</h3>
              <p className="placeholder">-- V</p>
            </div>
            <div className="sensor">
              <h3>Amperaje</h3>
              <p className="placeholder">-- A</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gráficas</h2>
          <div id="charts">
          <h3>Voltaje</h3>
            <VoltageChart />
            <h3>Corriente</h3>
            <AmperageChart />
          </div>
        </section>
        <section>
          <h2>Probabilidad y Estadística</h2>
          <div id="statistics">
            <div className="statistic">
              <h3>Media</h3>
              <p className="placeholder">--</p>
            </div>
            <div className="statistic">
              <h3>Mediana</h3>
              <p className="placeholder">--</p>
            </div>
            <div className="statistic">
              <h3>Moda</h3>
              <p className="placeholder">--</p>
            </div>
            <div className="statistic">
              <h3>Desviación Estándar</h3>
              <p className="placeholder">--</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
