import React from 'react'
import dish1 from '../assets/dish1.avif'
import { NavLink } from 'react-router-dom'
import Button from './ui/Button'
import Chip from './ui/Chip'
import Ratings from './ui/Ratings'

const Dish = ({ dark=false,dish,order=true,addToCart }) => {
  return (
    <div>
        <div className={`bg-white flex flex-col rounded-2xl text-slate-500 w-72 shadow overflow-hidden`}>
          <div className='overflow-hidden'>
            <img src={"https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="dish" className='w-full h-52 hover:scale-105 hover:-rotate-2 transition-all duration-200' />
          </div>
            <section className={`flex flex-col p-3 border-b-[1px] flex-1 gap-1`}>
              <div className='flex items-center justify-between'>
                <h5 className={`text-slate-900 first-letter:capitalize font-bold text-2xl`}>{dish.name}</h5>
                  <p className='text-sm font-semibold'><span><i class="fa-regular fa-clock"></i></span> 10min</p>
              </div>
                <p className='first-letter:capitalize text-sm font-semibold'>{dish.description}</p>
                <Ratings value={dish.rating} />
                <div className='flex gap-1'>
                  {
                    dish?.tags?.map((tag,ind) => <Chip text={tag} />)
                  }
                </div>
                {order && <div className='flex justify-between items-center flex-1'>
                <span className={`text-green-500 text-3xl font-semibold`}>Rs{dish.price}</span>
                <Button text={'order now'} handleClick={addToCart} />
                </div>}
            </section>
        </div>
    </div>
  )
}

export default Dish