import React, { useState } from 'react'
import Table from '../../components/ui/Table'

const Staff = () => {
  const initialData = [
    { name: 'John Doe', id: 'S001', gender: 'Male', age: 35,present:'Yes' },
    { name: 'Jane Smith', id: 'S002', gender: 'Female', age: 28,present:'Yes' },
    { name: 'Michael Johnson', id: 'S003', gender: 'Male', age: 42,present:'Yes' },
    { name: 'Emily Davis', id: 'S004', gender: 'Female', age: 31,present:'Yes' },
    { name: 'David Wilson', id: 'S005', gender: 'Male', age: 27,present:'Yes' },
    { name: 'John Doe', id: 'S001', gender: 'Male', age: 35,present:'Yes' },
    { name: 'Jane Smith', id: 'S002', gender: 'Female', age: 28,present:'Yes' },
    { name: 'Michael Johnson', id: 'S003', gender: 'Male', age: 42,present:'Yes' },
    { name: 'Emily Davis', id: 'S004', gender: 'Female', age: 31,present:'Yes' },
    { name: 'David Wilson', id: 'S005', gender: 'Male', age: 27,present:'Yes' },
  ];
  const [staffData, setStaffData] = useState(initialData);
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold capitalize'>Staff details</p>
        <Table data={staffData} />
    </div>
  )
}

export default Staff