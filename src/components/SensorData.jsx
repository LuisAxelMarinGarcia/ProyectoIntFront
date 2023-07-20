import React from 'react';
import AmperageData from './AmperageData';
import VoltageData from './VoltageData';


function SensorData() {
  return (
<>
<section id="live-data">
          <h2>Datos en Vivo</h2>
          <div id="sensor-data">
<VoltageData />
<AmperageData />
          </div>
        </section>
</>
  );
}

export default SensorData;
