import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function VoltageChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Voltaje',
        data: [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  // Simular la recepción de datos del sensor
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = { ...prevData };
        const newTime = new Date().toLocaleTimeString();
        newData.labels.push(newTime);
        newData.datasets[0].data.push(Math.random() * 100);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={data} />;
}

export default VoltageChart;