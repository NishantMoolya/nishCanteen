import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch';

const SuggestionList = ({ suggestion,selected,selectSuggestion,getValue }) => {
  return(<span className={`px-1 py-1 rounded hover:bg-green-50 ${selected?'bg-green-50':''}`} onClick={(e) => {selectSuggestion(e);getValue();}}><p className={`hover:text-green-500 ${selected?'text-green-500':'text-slate-700'} font-semibold text-sm capitalize`}>{suggestion.productId.name}</p></span>)
}
const Searchbar = ({ handleSearch }) => {

  const getValue = (id) => {
    handleSearch(id);
  }


  const { changeSearchText,search,suggestions,selectSuggestion,selected } = useSearch('/menu/search');

  return (
    <div className='py-1 px-2 shadow rounded flex flex-col sm:w-3/4 w-full relative gap-2'>
      <div className='flex items-center'>
        <input type="search" name="dish_search" id="dish_search" value={search} onChange={changeSearchText} placeholder='search for foods...' className='outline-none border-0 w-full' autoComplete='off' />
        <button className='text-xl border-l-2 pl-2'><i className="fa-brands fa-searchengin"></i></button>
      </div>
      {search !== "" && !selected?<div className='absolute top-10 left-0 right-0 bg-white shadow rounded py-1 px-2 flex flex-col'>
        <p className='text-slate-500 font-semibold text-sm'>Relevant suggestions</p>
        {
          suggestions?.length !== 0?suggestions?.filter(item => item.productId.name.toLowerCase().includes(search.toLowerCase())).map((suggestion,ind) => <SuggestionList suggestion={suggestion} key={suggestion._id} selectSuggestion={selectSuggestion} handleSearch={handleSearch} getValue={() => getValue(suggestion._id)} />):<li className='hover:bg-white px-2 py-1 rounded-sm capitalize'>No suggestions found</li>
        }
      </div>:null}
    </div>
  )
}

export default Searchbar