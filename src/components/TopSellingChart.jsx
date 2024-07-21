// HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopSellingChart = ({ data }) => {
    const options = {
        indexAxis: 'y', // Make the chart horizontal
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top Selling Dishes in Descending Order',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };
    return <Bar data={data} options={options} />;
};

export default TopSellingChart;
