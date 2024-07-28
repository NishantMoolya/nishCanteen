import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import { NavLink } from 'react-router-dom'
import Dish from '../components/Dish'
//import DishData from '../data/dishes.json'
import TagChip from '../components/ui/TagChip'
import FilterBox from '../components/FilterBox'
//import useMenu from '../hooks/useMenu'
//import Button from '../components/ui/Button'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../redux/reducers/dishReducer'
import useLazyScroll from '../hooks/useLazyScroll'
import useFetch from '../hooks/useFetch'
//import { isArraysEqual, isDeepEqual } from '../helpers/menuHelpers'

const List = ({ label,children }) => {
  return( <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
    {children}
    <p className='capitalize'>{label}</p>
</li>)
}

const Menu = () => {
  const initialTags = ["spicy","tangy",'sweet','hot','cool','sour','coldrink'];
  const initialFilter = { category:[],tags:[],isVeg:"",startPrice:10,endPrice:100 };
  const baseUrl = process.env.REACT_APP_BASE_URL;
  
  const [dishData, setDishData] = useState([]);
  
  const [filter, setFilter] = useState(initialFilter);
  const [tags, setTags] = useState([]);
  const [viewFilter, setViewFilter] = useState(false);

  const { frameRef,handleScroll,scrollData,lazyLoadData,resetPage } = useLazyScroll();
  const getData = useFetch();

  const dispatch = useDispatch();
  
  useEffect(() => {
      lazyLoadData(`${baseUrl}/menu/products?page=${scrollData.page}`,'POST',filter).then(res => {
        //console.log(res);
        if(res) {
          scrollData.page === 1?setDishData(prev => [...res.data]):setDishData(prev => [...prev,...res.data])
        }
      });
  },[scrollData.page]);

  const fetchData = (data) => {
    resetPage();
    lazyLoadData(`${baseUrl}/menu/products?page=${1}`,'POST',{...filter,...data}).then(res => {
      //console.log(res);
          if(res) {
            setDishData(prev => [...res.data]);
          }
        });
  }

  const handleTagSelect = (tag,selected) => {
    if (selected) {
      const copy = tags.filter(val => val !== tag);
      setTags(copy);
      fetchData({...filter,tags:[...copy]});
    }else{
      setTags(prev => [...prev,tag]);
      fetchData({...filter,tags:[...tags,tag]});
    }
    setFilter(prev => ({...prev,tags:[...tags]}));
  }

  const closeFilter = () => {
    setViewFilter(false);
  }

  const handleFilter = (data) => {
    fetchData({...filter,...data});
    setFilter(prev => ({...data}));
  }

  const handleClear = () => {
    setFilter(prev => ({...initialFilter}));
    fetchData({...initialFilter});
    closeFilter();
  }
    
    const handleSearch = async (id,selected) => {
      if(!selected){const data = await getData(baseUrl+`/products/${id}`);
      if(data){
        setDishData(prev => [...data.data]);
      }else{
        alert('failed');
      }}else fetchData({...filter});
    }


  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center w-full px-2 py-2'>
        <Searchbar handleSearch={handleSearch} />
      </div>
      <div className='flex items-center gap-4 py-2 px-2 sm:px-8 overflow-x-scroll'>
        <span className={`py-1 px-2 border ${viewFilter?'bg-orange-500 text-white':'text-orange-500'} border-orange-500 font-semibold text-sm rounded-xl`} onClick={() => setViewFilter(prev => !prev)}><i className="fa-solid fa-filter"></i></span>
        {
          initialTags.map((tag,ind) => <TagChip key={ind} text={tag} selected={tags.includes(tag)} handleSelect={handleTagSelect} />)
        }
      </div>
      <div className='absolute top-44 left-2 z-10'>
            {viewFilter && <FilterBox filter={filter} closeFilter={closeFilter} handleFilter={handleFilter} handleClear={handleClear} />}
        </div>
      <div className='p-2 flex justify-evenly gap-4 h-screen w-full overflow-y-scroll flex-wrap' ref={frameRef} onScroll={handleScroll}> 
        {
          dishData.map((dish,ind) => <Dish key={ind} dish={dish} addToCart={() => dispatch(addProductToCart({productId:dish._id,name:dish.name,image:dish.image,price:dish.price}))} />)
        }
      </div>
      {scrollData.isLoading?'Loading...':null}
      {!scrollData.canScroll?'No more products':null}
    </div>
  )
}

export default Menu