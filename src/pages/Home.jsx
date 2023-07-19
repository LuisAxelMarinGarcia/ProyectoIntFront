import React from 'react';
import '../styles/home.css';
import VoltageChart from '../components/VoltageChart';
import AmperageChart from '../components/AmperageChart'; 

function Home() {
  return (
    <div className="App">
      <main>
        <section id="intro">
          <h2>Bienvenido al Sistema de Monitoreo de Corriente y Voltaje</h2>
          <p>Monitoreamos en tiempo real los datos de voltaje y corriente de tu hogar para mantener todo bajo control.</p>
        </section>
        <section id="live-data">
          <h2>Datos en Vivo</h2>
          <div id="sensor-data">
            <div className="sensor">
              <h3>Voltaje</h3>
              <p className="placeholder">-- V</p>
            </div>
            <div className="sensor">
              <h3>Corriente</h3>
              <p className="placeholder">-- A</p>
            </div>
          </div>
        </section>
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
        <section id="statistics">
          <h2>Estadísticas</h2>
          <div className="statistics-container">
            <div className="statistics-subsection">
              <h3>Voltaje</h3>
              <div className="statistic">
                <h4>Media</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Mediana</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Moda</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Desviación Estándar</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Varianza</h4>
                <p className="placeholder">--</p>
              </div>
            </div>
            <div className="statistics-subsection">
              <h3>Corriente</h3>
              <div className="statistic">
                <h4>Media</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Mediana</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Moda</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Desviación Estándar</h4>
                <p className="placeholder">--</p>
              </div>
              <div className="statistic">
                <h4>Varianza</h4>
                <p className="placeholder">--</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
