import React from 'react'
import dish1 from '../assets/dish1.avif'

const Dish = ({ dark=false }) => {
  return (
    <div>
        <div className={`bg-white flex sm:flex-row flex-col rounded-2xl text-slate-500 min-w-80 sm:w-full shadow overflow-hidden`}>
            <img src={dish1} alt="dish" className='sm:w-60 w-full sm:h-52 h-60' />
            <section className={`flex flex-col p-3 border-b-[1px] flex-1 gap-1`}>
              <div className='flex items-center justify-between'>
                <h5 className={`text-slate-900 first-letter:capitalize font-bold text-2xl`}>Burger for meal</h5>
                  <p className='text-sm font-semibold'><span><i class="fa-regular fa-clock"></i></span> 20min</p>
              </div>
                <p className='first-letter:capitalize text-sm font-semibold'>it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolorem ducimus delectus ipsa, veniam neque?</p>
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
                <div className='flex justify-between items-center flex-1'>
                <span className={`text-green-500 text-3xl font-semibold`}>$45</span>
                <button className={`py-2 px-4 bg-green-500 hover:bg-green-600 self-end text-white first-letter:capitalize rounded-md shadow font-semibold`}>order now</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Dish