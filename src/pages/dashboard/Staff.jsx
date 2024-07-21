import React from 'react'
import StaffTable from '../../components/StaffTable'

const Staff = () => {
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold capitalize'>Staff details</p>
        <StaffTable />
    </div>
  )
}

export default Staff