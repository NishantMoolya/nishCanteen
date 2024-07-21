import React, { useState } from 'react'

const SuggestionList = ({ suggestion,selected,selectSuggestion }) => {
  return(<span className={`px-1 py-1 rounded hover:bg-green-50 ${selected?'bg-green-50':''}`} onClick={() => selectSuggestion(suggestion)}><p className={`hover:text-green-500 ${selected?'text-green-500':'text-slate-700'} font-semibold text-sm capitalize`}>{suggestion}</p></span>)
}
const Searchbar = () => {
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [suggestions, setSuggestions] = useState(Array(4).fill(0));
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
  }

  const selectSuggestion = (suggestion) => {
    setSearchInput(suggestion);
  }

  return (
    <div className='py-1 px-2 shadow rounded flex flex-col sm:w-3/4 w-full relative gap-2' onKeyDown={handleKeyDown}>
      <div className='flex items-center'>
        <input type="search" name="dish_search" id="dish_search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for foods...' className='outline-none border-0 w-full' autoComplete='off' />
        <button className='text-xl border-l-2 pl-2'><i className="fa-brands fa-searchengin"></i></button>
      </div>
      {searchInput !== ""?<div className='absolute top-10 left-0 right-0 bg-white shadow rounded py-1 px-2 flex flex-col'>
        <p className='text-slate-500 font-semibold text-sm'>Relevant suggestions</p>
        {
          suggestions.map((suggestion,ind) => <SuggestionList suggestion={suggestion} key={ind} selected={activeSuggestion === ind} selectSuggestion={selectSuggestion} />)
        }
      </div>:null}
    </div>
  )
}

export default Searchbar