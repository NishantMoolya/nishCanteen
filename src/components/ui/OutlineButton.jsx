import React from 'react'

const OutlineButton = ({ text,end=true,children,type='button',handleClick=() => {},color='success' }) => {
  return (
    <button type={type} onClick={handleClick} className={`py-2 px-5 border ${color === 'success'?'border-green-500':'border-red-500'} ${color === 'success'?'hover:bg-green-500':'hover:bg-red-500'} hover:text-white  transition-all duration-200 ${end?"self-end":""} ${color === 'success'?'text-green-500':'text-red-500'} first-letter:capitalize rounded-lg text-center font-semibold`}>{text} {children}</button>
  )
}

export default OutlineButton