import React from 'react'
import RangeSlider from './ui/RangeSlider'
import Button from './ui/Button'

const Checkbox = ({ label }) => {
    return(<span className='flex items-center gap-4'>
      <label htmlFor={label} className='flex-1 text-left text-slate-600 capitalize font-semibold hover:text-green-500'>{label}</label><input type="checkbox" name={label} id={label} />
      </span>)
  }

const FilterBox = ({ closeFilter }) => {
  return (
    <div className='flex flex-col gap-2 p-2 bg-white rounded-lg shadow w-60'>
        <span className='flex items-center justify-between'>
        <p className='text-slate-500 font-semibold text-sm'>Categories</p>
        <p className='text-xl text-red-500' onClick={closeFilter}><i className="fa-regular fa-circle-xmark"></i></p>
        </span>
        <Checkbox label={'lunch'} />
        <Checkbox label={'breakfast'} />
        <Checkbox label={'fastfood'} />
        <Checkbox label={'snacks'} />
        <RangeSlider min={0} max={100} />
        <div className='flex items-center justify-between'>
        <button className='text-orange-500 border border-orange-500 py-1 px-2 text-sm font-semibold rounded capitalize hover:bg-orange-500 hover:text-white transition-all duration-200'>clear</button>
        <button className='bg-green-500 text-white capitalize py-1 px-2 rounded text-sm font-semibold hover:bg-green-600 transition-all duration-200'>apply</button>
        </div>
        </div>
  )
}

export default FilterBox