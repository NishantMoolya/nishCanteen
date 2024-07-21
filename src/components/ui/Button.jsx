import React from 'react'

const Button = ({ text,end=true }) => {
  return (
    <button className={`py-2 px-4 bg-green-500 hover:bg-green-600 ${end?"self-end":""} text-white first-letter:capitalize rounded-md shadow font-semibold`}>{text}</button>
  )
}

export default Button