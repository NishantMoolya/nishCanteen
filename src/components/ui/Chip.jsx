import React from 'react'

const Chip = ({ text }) => {
  return (
    <span className={`text-white  py-1 px-3 self-start bg-orange-400 capitalize font-semibold text-xs rounded-xl`}>{text}</span>
  )
}

export default Chip