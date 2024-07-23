import React from 'react'

const OutlineButton = ({ text,end=true,children,type='button',handleClick=() => {},color='success' }) => {
  return (
    <button type={type} onClick={handleClick} className={`py-2 px-5 border ${color === 'success'?'border-green-500':'border-red-500'} hover:${color === 'success'?'bg-green-500':'bg-red-500'} transition-all duration-200 hover:text-white ${end?"self-end":""} ${color === 'success'?'text-green-500':'text-red-500'} first-letter:capitalize rounded-lg text-center font-semibold`}>{text} {children}</button>
  )
}

export default OutlineButton