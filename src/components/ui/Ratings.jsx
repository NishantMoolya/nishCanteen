import React from 'react'

const Ratings = ({ value=0 }) => {
    const absValue = Math.floor(Math.abs(value));
    const diff = Math.abs(value) - absValue;
  return (
    <div className='flex items-center gap-1'>
                {Array(absValue).fill(0).map((val,ind) => 
                <p key={ind} className='text-yellow-400'><i className="fa-solid fa-star"></i></p>)}
                {diff !== 0 && <p className='text-yellow-400'><i class="fa-solid fa-star-half"></i></p>}
                <p className='font-semibold'>{!value?'':absValue+diff}</p>
    </div>
  )
}

export default Ratings