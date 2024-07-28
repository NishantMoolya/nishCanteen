import React, { useState } from 'react'
import RangeSlider from './ui/RangeSlider'

const Checkbox = ({ label,handleChange,selected }) => {
    return(<span className='flex items-center gap-4'>
      <label htmlFor={label} className='flex-1 text-left text-slate-600 capitalize font-semibold hover:text-green-500'>{label}</label><input type="checkbox" defaultChecked={selected} onChange={(e) => handleChange(label,selected)} name={label} id={label} />
      </span>)
  }

const FilterBox = ({ closeFilter,handleFilter,handleClear,filter }) => {
  const initialCategory = ['lunch','snacks','breakfast','fastfood'];
  const [category, setCategory] = useState(filter.category);
  const [range, setRange] = useState({ min:filter.startPrice, max:filter.endPrice });

  const handleMinChange = (e) => {
    const value = Math.max(10, Math.min(e.target.value, range.max));
    setRange((prevRange) => ({ ...prevRange, min: value }));
  };

  const handleMaxChange = (e) => {
    const value = Math.min(100, Math.max(e.target.value, range.min));
    setRange((prevRange) => ({ ...prevRange, max: value }));
  };

  const handleCategorySelect = (tag,selected) => {
    if (selected) {
      const copy = category.filter(val => val !== tag);
      setCategory(copy);
    }else{
      setCategory(prev => [...prev,tag]);
    }
  }

  const handleApply = () => {
    console.log(category,range);
    handleFilter({...filter,startPrice:range.min,endPrice:range.max,category:category});
    closeFilter();
  }

  return (
    <div className='flex flex-col gap-2 p-2 bg-white rounded-lg shadow w-60'>
        <span className='flex items-center justify-between'>
        <p className='text-slate-500 font-semibold text-sm'>Categories</p>
        <p className='text-xl text-red-500' onClick={closeFilter}><i className="fa-regular fa-circle-xmark"></i></p>
        </span>
        <>
        {
          initialCategory.map((item,ind) => <Checkbox key={ind} label={item} selected={category.includes(item)} handleChange={handleCategorySelect} />)
        }
        </>
        <RangeSlider range={range} handleMinChange={handleMinChange} handleMaxChange={handleMaxChange} />
        <div className='flex items-center justify-between'>
        <button onClick={handleClear} className='text-orange-500 border border-orange-500 py-1 px-2 text-sm font-semibold rounded capitalize hover:bg-orange-500 hover:text-white transition-all duration-200'>clear</button>
        <button onClick={handleApply} className='bg-green-500 text-white capitalize py-1 px-2 rounded text-sm font-semibold hover:bg-green-600 transition-all duration-200'>apply</button>
        </div>
        </div>
  )
}

export default FilterBox