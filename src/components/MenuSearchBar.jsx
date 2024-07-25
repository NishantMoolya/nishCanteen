import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch';

const SuggestionList = ({ suggestion,selected,selectSuggestion,addProductToMenu }) => {
  return(<span className={`px-1 py-1 rounded hover:bg-green-50 ${selected?'bg-green-50':''} flex`} onClick={selectSuggestion}><p className={`hover:text-green-500 flex-1 ${selected?'text-green-500':'text-slate-700'} font-semibold text-sm capitalize`}>{suggestion.name}</p><p className='font-semibold text-lg capitalize text-green-500 px-3' onClick={() => addProductToMenu(suggestion.name,suggestion._id)}><i className="fa-solid fa-plus"></i></p></span>)
}
const MenuSearchBar = ({ addProductToMenu }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [searchInput, setSearchInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "arrowup") {
      setActiveSuggestion(prev => Math.max(-1,prev-1));
    }else if(e.key.toLowerCase() === "arrowdown"){
      setActiveSuggestion(prev => Math.min(suggestions.length-1,prev+1));
    }else if(e.key.toLowerCase() === "enter"){
      selectSuggestion(suggestions[activeSuggestion]);
    }else{
      return 0;
    }
    console.log(e.key);
  }

  const { changeSearchText,search,suggestions,selectSuggestion } = useSearch('/products/search');

  return (
    <div className='py-1 px-2 shadow rounded flex flex-col sm:w-3/4 w-full relative gap-2' onKeyDown={handleKeyDown}>
      <div className='flex items-center'>
        <input type="search" name="dish_search" id="dish_search" value={search} onChange={changeSearchText} placeholder='search for foods...' className='outline-none border-0 w-full' autoComplete='off' />
        <button className='text-xl border-l-2 pl-2'><i className="fa-brands fa-searchengin"></i></button>
      </div>
      {search !== ""?<div className='absolute top-10 left-0 right-0 bg-white shadow rounded py-1 px-2 flex flex-col'>
        <p className='text-slate-500 font-semibold text-sm'>Relevant suggestions</p>
        {
          suggestions?.length !== 0?suggestions?.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((suggestion,ind) => <SuggestionList suggestion={suggestion} key={suggestion._id} selectSuggestion={selectSuggestion} addProductToMenu={addProductToMenu} />):<li className='hover:bg-white px-2 py-1 rounded-sm capitalize'>No suggestions found</li>
        }
      </div>:null}
    </div>
  )
}

export default MenuSearchBar