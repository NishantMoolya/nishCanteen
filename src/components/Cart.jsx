import React, { useState } from 'react'
import dish1 from '../assets/dish1.avif'
import { NavLink } from 'react-router-dom'

const Cart = ({ dark=false,dish }) => {
    const [count, setCount] = useState(1);
    const handleCounter = (val) => {
      setCount(prev => Math.min(Math.max(1,prev+val),100));
    }
  return (
    <div>
        <div className={`bg-white flex gap-2 text-slate-500 sm:w-full overflow-hidden`}>
            <img src={dish.image} alt="dish" className='w-16 h-16 rounded' />
            <section className={`flex flex-col justify-center flex-1 gap-1`}>
              <div className='flex items-center justify-between'>
                <h5 className={`text-slate-900 first-letter:capitalize font-bold text-base`}>{dish.name}</h5>
              </div>
              <div className='flex justify-between'>
                <p>1 x {count} = <span className='font-semibold'>Rs{50*count}</span></p>
                <div className='flex items-center gap-2 self-end'>
                    <button className='px-1 py-[2px] border border-orange-500 rounded shadow-sm text-sm text-orange-500' onClick={() => handleCounter(-1)}><i className="fa-solid fa-minus"></i></button>
                    <p className='text-lg text-orange-500 font-semibold'>{count}</p>
                    <button className='px-1 py-[2px] border border-orange-500 rounded shadow-sm text-sm text-orange-500' onClick={() => handleCounter(1)}><i className="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </section>
        </div>
    </div>
  )
}

export default Cart