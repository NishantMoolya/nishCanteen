// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const CustomerPieChart = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Percentage of People Eating Food in Hotel',
            },
        },
    };

    return <Pie data={data} options={options} />;
};

export default CustomerPieChart;
