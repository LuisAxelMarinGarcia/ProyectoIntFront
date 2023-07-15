import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
 <header>
  <div className="logo">
    <img src="images/logo.png" alt="Logo" />
  </div>
  <h1>Sistema de Detección de Fluctuación Eléctrica</h1>
</header>

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
            <div className="chart-placeholder">Gráfica de Voltaje</div>
            <div className="chart-placeholder">Gráfica de Amperaje</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
