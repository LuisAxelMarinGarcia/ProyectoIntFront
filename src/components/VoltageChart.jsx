import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function VoltageChart() {
  const chartRef = useRef(null);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Voltaje',
        data: [],
        fill: false,
        backgroundColor: 'rgb(255, 159, 64)',
        borderColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  });

  // Simular la recepción de datos del sensor
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = { ...prevData };
        newData.labels.push(count++);
        newData.datasets[0].data.push(Math.random() * 100);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (!(chartRef.current instanceof Chart)) {
        chartRef.current = new Chart(chartRef.current.getContext('2d'), {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            scales: {
              x: { type: 'linear' },
              y: { type: 'linear' },
            },
          },
        });
      } else {
        chartRef.current.data = data;
        chartRef.current.update();
      }
    }
  }, [data]);

  return <canvas ref={chartRef} />;
}

export default VoltageChart;
