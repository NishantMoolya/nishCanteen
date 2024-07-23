import React, { useMemo } from 'react'
import ShortBlock from '../../components/ShortBlock'
import FoodSoldChart from '../../components/FoodSoldChart'
import MetaBlock from '../../components/ui/MetaBlock';
import BarGraph from '../../components/charts/BarGraph';
import PieChart from '../../components/charts/PieChart';
import HorizontalBarChart from '../../components/charts/HorizontalBarGraph';

const Overview = () => {
  const todayData = {
    labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Tacos', 'Sushi', 'Steak', 'Sandwich', 'Soup', 'Ice Cream'],
    datasets: [
        {
            label: 'Number of Servings',
            data: [20, 50, 30, 40, 75, 80, 25, 39, 27, 30],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};
const yesData = {
  labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Tacos', 'Sushi', 'Steak', 'Sandwich', 'Soup', 'Ice Cream'],
  datasets: [
      {
          label: 'Number of Servings',
          data: [10, 70, 50, 85, 30, 90, 30, 20, 85, 15],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
      },
  ],
};
const daybefData = {
  labels: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Tacos', 'Sushi', 'Steak', 'Sandwich', 'Soup', 'Ice Cream'],
  datasets: [
      {
          label: 'Number of Servings',
          data: [12, 9, 85, 60, 90, 40, 15, 20, 10, 60],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
      },
  ],
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

let dishdata = {
  labels: ['Burger', 'Pizza', 'Pasta', 'Salad', 'Sushi'],
  datasets: [
    {
      label: 'Plates Sold',
      data: [120, 100, 80, 70, 50],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

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

const horidata = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Sales',
      data: [300, 50, 100],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

  return (
    <>
    <p className='text-2xl font-semibold'>Overview</p>
    <div className='flex flex-wrap gap-2 px-2 sm:px-0'>
                <MetaBlock color={'bg-orange-500'} label={'Paid'} value={10}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                </MetaBlock>
                <MetaBlock color={'bg-cyan-500'} label={'Ready'} value={20}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                </MetaBlock>
                <MetaBlock color={'bg-green-500'} label={'PickedUp'} value={30}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    </svg>
                </MetaBlock>
            </div>
    <p className='text-2xl font-semibold'>Today's sales</p>
    <div className='flex flex-col gap-4'>
    <HorizontalBarChart data={dishdata} legend={'example'} title="Top selling products" />
    <BarGraph data={dishdata} legend={'Number of Plates Sold per Dish'} title="Today's Performance" />
    <div className='flex items-center gap-2'>
      <div className='flex-1'>
    <PieChart data={pieData} legend={'Sales by Product'} title="Yesterday" />
      </div>
      <div className='flex-1'>
    <PieChart data={pieData} legend={'Sales by Product'} title="Today" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Overview