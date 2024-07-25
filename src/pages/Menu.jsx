import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import { NavLink } from 'react-router-dom'
import Dish from '../components/Dish'
//import DishData from '../data/dishes.json'
import TagChip from '../components/ui/TagChip'
import FilterBox from '../components/FilterBox'
import useMenu from '../hooks/useMenu'
import Button from '../components/ui/Button'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../redux/reducers/dishReducer'

const List = ({ label,children }) => {
  return( <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
    {children}
    <p className='capitalize'>{label}</p>
</li>)
}

const Menu = () => {
  const initialTags = ["spicy","tangy",'sweet','hot','cool','sour','coldrink'];
  const initialFilter = { category:[],tags:[],isVeg:undefined,startPrice:'',endPrice:'' };

  const [tags, setTags] = useState([]);
  const [viewFilter, setViewFilter] = useState(false);
  const [dishData, setDishData] = useState([]);
  const [filter, setFilter] = useState(initialFilter);

  const [page,setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);
  const [pageEnd,setPageEnd] = useState(false);

  const getData = useMenu('/menu/products');

  useEffect(() => {
    getData(page,filter).then(res => {
      if (res) {
        if (res.menu.length !== 0) {
          console.log(res.menu);
          setDishData(prev => [...prev,...res.menu]);
          setPageEnd(false);
        }else{
          setPageEnd(true);
        }
      }
    }).finally(() => setIsLoading(false));
  },[page,filter]);

  const handleViewMore = () => {
    setIsLoading(true);
    setPage(prev => prev+1);
  }

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

  const baseUrl = process.env.REACT_APP_BASE_URL;
    const searchData = async (url) => {
        try {
        let options = {
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        };
        console.log(baseUrl+url);
            const res = await fetch(baseUrl+url,options);
            const resData = await res.json();
            if (res.status === 200) {   
                return resData;
            }else throw new Error(`${resData?.message}`);
        } catch (err) {
            console.log(`hook:an error occurred cannot post data:${err}`);
            return null;
        }
    }

    const handleSearch = async (id) => {
      try {
      const data = await searchData(`/menu/${id}`);
      if(data){
        console.log('got');
        console.log(data);
        setDishData(prev => [data.data]);
      }else{
        alert('failed');
      }
    } catch (err) {
        
    }
    }

    const dispatch = useDispatch();

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
            {viewFilter && <FilterBox closeFilter={closeFilter} />}
        </div>
      <div className='p-2 flex justify-evenly gap-4 max-h-screen w-full overflow-y-scroll flex-wrap'> 
        {
          dishData.map((dish,ind) => <Dish key={ind} dish={dish} addToCart={() => dispatch(addProductToCart({productId:dish._id,name:dish.name,image:dish.image,price:dish.price}))} />)
        }
      </div>
      {!isLoading?!pageEnd?<span className='w-full flex items-center justify-center'><Button text={'view more'} handleClick={handleViewMore} /></span>:'no more products':'Loading'}
    </div>
  )
}

export default Menu