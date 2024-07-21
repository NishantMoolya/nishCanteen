// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FoodSoldChart = ({ data }) => {
    // Data for the bar chart

    // Options for the bar chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Number of Servings for 10 Food Items',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default FoodSoldChart;
