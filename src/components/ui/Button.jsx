import React from 'react'

const Button = ({ text,end=true,handleClick=() => {},type='button',disabled }) => {
  return (
    <button onClick={handleClick} type={type} disabled={disabled} className={`py-2 px-4 bg-green-500 hover:bg-green-600 ${end?"self-end":""} transition-all duration-200 text-white first-letter:capitalize rounded-md shadow font-semibold`}>{text}</button>
  )
}

export default Button