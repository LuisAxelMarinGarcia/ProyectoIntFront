import React, { useState, useEffect, useRef, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { AuthContext } from './AuthContext';
import axios from 'axios';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

function VoltageChart() {
  const chartRef = useRef(null);
  const { isLoggedIn } = useContext(AuthContext);
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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('http://3.224.141.144/api/voltsensor/volt');
        updateData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  const updateData = (newData) => {
    setData((prevData) => {
      const newLabels = [...prevData.labels, prevData.labels.length];
      const newDatasets = [
        {
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data, newData],
        },
      ];
      return {
        labels: newLabels,
        datasets: newDatasets,
      };
    });
  };

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

  if (!isLoggedIn) {
    return (
      <div className="sensor">
        <h3>Voltaje</h3>
        <p className="placeholder">Inicia sesión para ver los datos de la gráfica</p>
      </div>
    );
  }

  return (
    <div>
      {error && <p>Error al obtener los datos: {error}</p>}
      <Line ref={chartRef} data={data} />
    </div>
  );
}

export default VoltageChart;
