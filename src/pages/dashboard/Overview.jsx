import React, { useMemo } from 'react'
import ShortBlock from '../../components/ShortBlock'
import FoodSoldChart from '../../components/FoodSoldChart'

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

  return (
    <>
    <p className='text-2xl font-semibold'>Overview</p>
          <div className='flex gap-2 flex-wrap'>
          <ShortBlock text={'total number of students served'} value={100} />
          <ShortBlock text={'total number of faculties served'} value={250} />
          <ShortBlock text={'total number of outsiders served'} value={3} />
          <ShortBlock text={'total number of staff served'} value={50} />
    </div>
    <p className='text-2xl font-semibold'>Today's sales</p>
    <div>
      <FoodSoldChart data={todayData} />
    </div>
    <p className='text-2xl font-semibold'>Yesterday's sales</p>
    <div>
    <FoodSoldChart data={yesData} />
    </div>
    <p className='text-2xl font-semibold'>20/06/2024's sales</p>
    <div>
    <FoodSoldChart data={daybefData} />
    </div>
    </>
  )
}

export default Overview