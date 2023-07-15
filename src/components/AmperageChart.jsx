import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function AmperageChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Amperaje',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
        newData.datasets[0].data.push(Math.random() * 10);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={data} />;
}

export default AmperageChart;
