// src/components/BarGraph.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data, legend, title }) => {
    let options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: legend,
          },
        },
      };
      
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4 capitalize text-orange-500">{title}</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;