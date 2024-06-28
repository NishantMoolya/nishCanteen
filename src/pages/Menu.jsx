import React from 'react'
import Searchbar from '../components/Searchbar'
import { NavLink } from 'react-router-dom'
import Dish from '../components/Dish'

const List = ({ label,children }) => {
  return( <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
    {children}
    <p className='capitalize'>{label}</p>
</li>)
}

const Checkbox = ({ label }) => {
  return(<span className='flex items-center'>
    <input type="checkbox" name={label} id={label} /><label htmlFor={label} className='flex-1 text-center capitalize hover:text-green-500'>{label}</label>
    </span>)
}
const Menu = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center w-full px-1 py-2'>
        <Searchbar />
      </div>
      <div className='flex'>
      <div className='w-1/4 sm:border p-2'>
      <p className='text-center text-lg text-orange-500 font-semibold capitalize'>Filters</p>
            <ul className='bg-white flex flex-col gap-1 p-3 font-semibold text-sm text-slate-900'>
            <List label={'lunch'} />
            <hr />
            <List label={'dinner'} />
            <hr />
            <List label={'snacks'} />
            <hr />
            <List label={'deserts'} />
            <hr />
            </ul>
            <hr />
            <ul className='bg-white flex flex-col gap-1 p-3 font-semibold text-sm text-slate-900'>
              <Checkbox label={'spicy'} />
              <Checkbox label={'sweet'} />
              <Checkbox label={'tangy'} />
            </ul>
            <hr />
            <ul className='bg-white flex flex-col gap-2 p-3 font-semibold text-sm text-slate-900'>
              <p className='font-semibold text-lg capitalize'>Pickup a price range</p>
              <div className='flex items-center gap-1'>
              <span>Rs10</span><input type="range" name="price" id="price" min={0} max={100} defaultValue={20} className='flex-1 text-green-500' /><span>Rs100</span>
              </div>
            </ul>
            </div>
      <div className='flex-1 border p-2 flex flex-col gap-2 max-h-screen overflow-y-scroll overflow-x-hidden'> 
        {
          Array(5).fill(0).map((val,ind) => <Dish key={ind} />)
        }
      </div>
      </div>
    </div>
  )
}

export default Menu