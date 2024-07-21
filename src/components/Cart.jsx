import React, { useState } from 'react'
import dish1 from '../assets/dish1.avif'
import { NavLink } from 'react-router-dom'

const Cart = ({ dark=false,dish }) => {
    const [count, setCount] = useState(1);
  return (
    <div>
        <div className={`bg-white flex sm:flex-row flex-col rounded-2xl text-slate-500 min-w-80 sm:w-full shadow overflow-hidden`}>
            <img src={dish.image} alt="dish" className='sm:w-60 w-full sm:h-52 h-60' />
            <section className={`flex flex-col justify-center p-3 border-b-[1px] flex-1 gap-1`}>
              <div className='flex items-center justify-between'>
                <h5 className={`text-slate-900 first-letter:capitalize font-bold text-2xl`}>{dish.name}</h5>
              </div>
                <p className='first-letter:capitalize text-sm font-semibold'>{dish.description}</p>
                <div className='flex items-center gap-1'>
                {Array(4).fill(0).map((val,ind) => 
                <p key={ind} className='text-yellow-400'><i className="fa-solid fa-star"></i></p>)}
                <p className='text-yellow-400'><i class="fa-solid fa-star-half"></i></p>
                <p className='font-semibold'>4.5</p>
                </div>
                <div className='flex gap-1'>
                <button className={`text-white  py-1 px-3 self-start bg-orange-400 capitalize font-semibold text-xs rounded-xl`}>spicy</button>
                <button className={`text-white  py-1 px-3 self-start bg-orange-400 capitalize font-semibold text-xs rounded-xl`}>tangy</button>
                </div>
                <div className='flex items-center gap-2 self-end'>
                    <button className='px-2 py-1 border border-orange-500 rounded shadow-sm text-lg text-orange-500' onClick={() => setCount(prev => prev+1)}><i className="fa-solid fa-plus"></i></button>
                    <p className='text-lg text-green-500 font-semibold'>{count}</p>
                    <button className='px-2 py-1 border border-orange-500 rounded shadow-sm text-lg text-orange-500' onClick={() => setCount(prev => prev-1)}><i className="fa-solid fa-minus"></i></button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Cart