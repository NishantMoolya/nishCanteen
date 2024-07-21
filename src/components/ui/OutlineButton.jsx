import React from 'react'

const OutlineButton = ({ text,end=true,children }) => {
  return (
    <button className={`py-2 px-5 border border-green-500 hover:bg-green-500 hover:text-white ${end?"self-end":""} text-green-500 first-letter:capitalize rounded-lg text-center font-semibold`}>{text} {children}</button>
  )
}

export default OutlineButton