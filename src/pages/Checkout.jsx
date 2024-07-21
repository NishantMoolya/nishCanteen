import React from 'react'
import Cart from '../components/Cart'
import { NavLink } from 'react-router-dom'
import Button from '../components/ui/Button'
import DishData from '../data/dishes.json'

const Checkout = ({ closeCart }) => {
  return (
  <div className='flex'>
    <div className='flex flex-col gap-2 ml-auto bg-white rounded-xl shadow p-2 w-full sm:w-96'>
      <div className='flex justify-between items-center'>
      <p className='text-sm text-slate-500'>Customer: <span className='font-semibold'>Nishant</span></p>
      <p className='text-sm text-slate-500'>{new Date().toDateString()}</p>
      <p className='text-xl text-red-500' onClick={closeCart}><i className="fa-regular fa-circle-xmark"></i></p>
      </div>
    <div className='flex flex-col gap-2'>
    {
      DishData.slice(0,4).map((dish,ind) =>  <Cart dish={dish} key={ind} />)
    }
      </div>
      <hr />
      <div className='flex flex-col px-4 py-1'>
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total items</p>
          <p className='text-green-500 font-bold text-lg'>5</p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total amount</p>
          <p className='text-green-500 font-bold text-lg'>Rs150</p>
      </div>
      </div>
      <Button text={'checkout'} end={false} />
    </div>
    </div>
  )
}

export default Checkout