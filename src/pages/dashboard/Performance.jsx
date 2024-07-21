import React from 'react'
import CustomerPieChart from '../../components/CustomerPieChart';
import TopSellingChart from '../../components/TopSellingChart';

const Performance = () => {
    const pieData = {
        labels: ['Students', 'Outsiders', 'Staff'],
        datasets: [
            {
                label: 'Percentage of People Eating Food',
                data: [60, 25, 15], // Example percentages
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const horBarData = {
        labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Tacos', 'Sushi'],
        datasets: [
            {
                label: 'Number of Servings',
                data: [120, 90, 80, 70, 50, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
  return (
    <div className='flex flex-col gap-8'>
        <p className='text-2xl font-semibold'>Performance</p>
        <div>
        <p className='text-2xl font-semibold mb-4 text-orange-500'>Top sold dishes</p>
            <TopSellingChart data={horBarData} />
        </div>
        <div className='h-[70vh] w-full'>
            <p className='text-2xl font-semibold mb-4 text-orange-500'>Piechart showing the distribution of type of customers</p>
        <CustomerPieChart data={pieData} />
        </div>
    </div>
  )
}

export default Performance