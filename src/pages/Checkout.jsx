import React from 'react'
import Cart from '../components/Cart'
import { NavLink } from 'react-router-dom'
import Button from '../components/ui/Button'
import DishData from '../data/dishes.json'

const Checkout = () => {
  return (
    // <div className='flex flex-col p-4 px-40 gap-4 overflow-hidden'>
    //     <p className='font-semibold text-slate-600 text-xl'>Your meal today</p>
    //     <div className='flex flex-col border rounded'>
    //         <p className='font-bold text-2xl text-center py-1 capitalize text-orange-500'>Orders placed</p>
    //         <div className='flex flex-col border gap-2 p-2'>
    //             {
    //                 DishData.slice(0,4).map((dish,ind) =>  <Cart dish={dish} key={ind} />)
    //             }
    //         </div>
    //         <div className='flex justify-between items-center py-1 px-8'>
    //             <p className='text-orange-500 font-bold text-2xl capitalize'>Total items</p>
    //             <p className='text-green-500 font-bold text-2xl'>5</p>
    //         </div>
    //         <hr />
    //         <div className='flex justify-between items-center py-1 px-8'>
    //             <p className='text-orange-500 font-bold text-2xl capitalize'>Total amount</p>
    //             <p className='text-green-500 font-bold text-2xl'>Rs150</p>
    //         </div>
    //         <hr />
    //     <div className='self-end m-4'>
    //     <NavLink to={'/pay'}>
    //         <Button text={'checkout'} />
    //     </NavLink>
    //     </div>
    //     </div>
    // </div>
    <div className='flex justify-center items-center h-80 opacity-50 bg-black rounded-2xl'>
        checkout
    </div>
  )
}

export default Checkout