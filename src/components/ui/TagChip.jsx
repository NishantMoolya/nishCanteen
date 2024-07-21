import React from 'react'

const TagChip = ({ text,selected,handleSelect }) => {
  return (
    <span className={`py-1 px-3 self-start ${selected?'bg-orange-500 text-white':'bg-white text-orange-500'}  border border-orange-500 capitalize font-semibold text-xs rounded-xl`} onClick={() => handleSelect(text,selected)}>{text}</span>
  )
}

export default TagChip