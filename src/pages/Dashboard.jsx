import React from 'react'

const List = ({ label,children }) => {
    return( <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
      {children}
      <p className='capitalize'>{label}</p>
  </li>)
  }

const Dashboard = () => {
  return (
    <div className='flex'>
       <div className='flex-[1] p-2 h-[90vh]'>
            <ul className='bg-white flex border rounded flex-col gap-1 p-3 font-semibold text-sm text-slate-900 h-full'>
            <List label={'analytics'} />
            <hr />
            <List label={'performance'} />
            <hr />
            <List label={'menu card'} />
            <hr />
            <List label={'staff'} />
            <hr />
            <List label={'setup'} />
            <hr />
            <List label={'decisions'} />
            </ul>
            </div>
        <div className='flex-[3] mt-2'>main</div>
    </div>
  )
}

export default Dashboard