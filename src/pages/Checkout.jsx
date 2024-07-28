import React from 'react'
import Cart from '../components/Cart'
import { NavLink } from 'react-router-dom'
import Button from '../components/ui/Button'
import DishData from '../data/dishes.json'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/reducers/dishReducer'
import { addToken } from '../redux/reducers/userReducer'

const Checkout = ({ closeCart }) => {
  const dish = useSelector(state => state.dish);

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
      dish.map((dish,ind) =>  <Cart dish={dish} key={ind} />)
    }
      </div>
      <hr />
      <div className='flex flex-col px-4 py-1'>
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total items</p>
          <p className='text-green-500 font-bold text-lg'>{dish.reduce((total, item) => total + item.quantity, 0)}</p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total amount</p>
          <p className='text-green-500 font-bold text-lg'>{dish.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>
      </div>
      {dish.length !== 0?<NavLink to={'/payment'} className={'flex flex-col'} ><Button text={'checkout'} end={false} handleClick={closeCart} /></NavLink>:<Button text={'your chart is empty'} end={false} handleClick={closeCart} />}
    </div>
    </div>
  )
}

export default Checkout