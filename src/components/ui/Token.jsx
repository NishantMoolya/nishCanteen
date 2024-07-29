import React from 'react'

const Token = ({ token }) => {
  return (
    <div className='w-40 h-40 flex items-center justify-center text-lg text-green-500 bg-slate-100 rounded shadow'>{token}</div>
  )
}

export default Token