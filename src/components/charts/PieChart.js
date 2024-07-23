// src/components/PieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, legend, title }) => {
    let options = {
        plugins: {
          title: {
            display: true,
            text: legend,
          },
        },
      };
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;