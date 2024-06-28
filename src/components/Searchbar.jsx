import React from 'react'

const Searchbar = () => {
  return (
    <div className='py-1 px-2 shadow rounded flex items-center w-3/4'>
        <input type="search" name="dish_search" id="dish_search" placeholder='search for foods...' className='outline-none border-0 w-full' />
        <button className='text-xl border-l-2 pl-2'><i className="fa-brands fa-searchengin"></i></button>
    </div>
  )
}

export default Searchbar