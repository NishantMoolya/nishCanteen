import React, { useState } from 'react'
import Searchbar from '../components/Searchbar'
import { NavLink } from 'react-router-dom'
import Dish from '../components/Dish'
import DishData from '../data/dishes.json'
import TagChip from '../components/ui/TagChip'
import FilterBox from '../components/FilterBox'

const List = ({ label,children }) => {
  return( <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
    {children}
    <p className='capitalize'>{label}</p>
</li>)
}

const Menu = () => {
  const initialTags = ["spicy","tangy",'sweet','hot','cool','sour','coldrink'];
  const [tags, setTags] = useState([]);
  const [viewFilter, setViewFilter] = useState(false);
  const handleTagSelect = (tag,selected) => {
    if (selected) {
      const copy = tags.filter(val => val !== tag);
      setTags(copy);
    }else{
      setTags(prev => [...prev,tag]);
    }
  }
  const closeFilter = () => {
    setViewFilter(false);
  }

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center w-full px-2 py-2'>
        <Searchbar />
      </div>
      <div className='flex items-center gap-4 py-2 px-2 sm:px-8 overflow-x-scroll'>
        <span className={`py-1 px-2 border ${viewFilter?'bg-orange-500 text-white':'text-orange-500'} border-orange-500 font-semibold text-sm rounded-xl`} onClick={() => setViewFilter(prev => !prev)}><i className="fa-solid fa-filter"></i></span>
        {
          initialTags.map((tag,ind) => <TagChip key={ind} text={tag} selected={tags.includes(tag)} handleSelect={handleTagSelect} />)
        }
      </div>
      <div className='absolute top-44 left-2 z-10'>
            {viewFilter && <FilterBox closeFilter={closeFilter} />}
        </div>
      <div className='p-2 flex justify-evenly gap-4 max-h-screen w-full overflow-y-scroll flex-wrap'> 
        {
          DishData.map((dish,ind) => <Dish key={ind} dish={dish} />)
        }
      </div>
    </div>
  )
}

export default Menu