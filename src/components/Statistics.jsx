import React from 'react';
import StatisticsAmperage from './StatisticsAmperage';
import StatisticsVoltage from './StatisticsVoltage';
function Statistics() {
  return (
<>
<section id="statistics">
          <h2>Estadísticas</h2>
          <div className="statistics-container">
          <StatisticsVoltage />
          <StatisticsAmperage />
          </div>
        </section>
</>
  );
}

export default Statistics;
