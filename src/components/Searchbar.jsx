import React, { useState, useEffect } from 'react';
import { useSearch } from '../hooks/useSearch';

const SuggestionList = ({ suggestion, selected, selectSuggestion, getValue }) => {
  const handleClick = () => {
    selectSuggestion(suggestion.name);
    getValue();
  }

  return (
    <span
      className={`px-1 py-1 rounded hover:bg-green-50 ${selected ? 'bg-green-50' : ''} flex items-center`}
      onClick={handleClick}>
      <p className={`hover:text-green-500 ${selected ? 'text-green-500' : 'text-slate-700'} flex-1 font-semibold text-sm capitalize`}>
        {suggestion.name}
      </p>
    </span>
  );
};

const Searchbar = ({ handleSearch }) => {
  const { changeSearchText, search, suggestions, selectSuggestion, selected } = useSearch(process.env.REACT_APP_BASE_URL+'/menu/search');
  
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === 'arrowdown') {
      setHighlightedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key.toLowerCase() === 'arrowup') {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key.toLowerCase() === 'enter') {
      if (highlightedIndex >= 0) {
        const selectedSuggestion = suggestions[highlightedIndex];
        selectSuggestion(selectedSuggestion.name);
        handleSearch(selectedSuggestion._id,selected);
      }
    }
  };

  useEffect(() => {
    if (search === "") {
      handleSearch('abcd',true);
    }
  },[search]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [search, suggestions]);

  return (
    <div className='py-1 px-2 shadow rounded flex flex-col sm:w-3/4 w-full relative gap-2'>
      <div className='flex items-center'>
        <input
          type="search"
          name="search"
          id="search"
          value={search}
          onChange={changeSearchText}
          onKeyDown={handleKeyDown}
          placeholder='search for foods...'
          className='outline-none border-0 w-full'
          autoComplete='off'
        />
        <button className='text-xl border-l-2 pl-2'>
          <i className="fa-brands fa-searchengin"></i>
        </button>
      </div>
      {(search !== "" && !selected) ? (
        <div className='absolute top-10 left-0 right-0 bg-white shadow rounded py-1 px-2 flex flex-col'>
          <p className='text-slate-500 font-semibold text-sm'>Relevant suggestions</p>
          {suggestions?.length !== 0 ? (
            suggestions.map((suggestion, ind) => (
              <SuggestionList
                suggestion={suggestion}
                key={suggestion._id}
                selectSuggestion={selectSuggestion}
                getValue={() => handleSearch(suggestion._id,selected)}
                selected={highlightedIndex === ind} 
              />
            ))
          ) : (
            <li className='hover:bg-white px-2 py-1 rounded-sm capitalize'>No suggestions found</li>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
