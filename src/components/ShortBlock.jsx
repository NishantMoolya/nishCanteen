import React from 'react'

const ShortBlock = ({ text,value }) => {
  return (
    <span className='shadow rounded p-2 flex flex-col items-center gap-2 flex-1'>
        <p className='font-semibold capitalize text-slate-500'>{text}</p>
        <p className='font-semibold text-lg text-orange-500'><i className="fa-solid fa-chart-line"></i> {value}</p>
    </span>
  )
}

export default ShortBlock