import React, { useEffect, useState } from 'react';
import usePost from '../../hooks/usePost';
import MenuSearchBar from '../../components/MenuSearchBar';
import useFetch from '../../hooks/useFetch';
import { showToast } from '../../redux/reducers/toastReducer';
import { useDispatch } from 'react-redux';

const MenuDish = ({ dish,handleRemove,fetchData }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(dish.platesAvailable);

  const dispatch = useDispatch();

  const handleEdit = async () => {
    try {
    const data = await fetchData(process.env.REACT_APP_BASE_URL+`/menu/${dish._id}`,'PATCH',{platesAvailable:value},201);
    if(data) dispatch(showToast({ message:'Menu updated successfully',type:'success'}));
    else dispatch(showToast({ message:'Failed to update',type:'error'}));
  } catch (err){ dispatch(showToast({ message:'Failed to update',type:'error'})); }
    finally{ setEdit(false)}
  }

  const handleEnterKey = (e) => e.key.toLowerCase() === 'enter'?handleEdit():null
  
  return(
    <div className='flex items-center gap-2 justify-stretch'>
    <span className='flex-1 capitalize font-semibold text-lg text-center py-1 px-3 rounded shadow bg-green-500 text-white'>{dish.productId.name}</span>
    <input type='number' disabled={!edit} onChange={(e) => setValue(e.target.value)} value={value} onKeyDown={handleEnterKey} className={`w-1/4 capitalize border font-semibold text-lg text-center py-1 px-3 rounded shadow ${edit?'bg-white text-orange-500':'bg-orange-500 text-white'}`} />
    <span className='capitalize font-semibold text-lg text-center px-2' onClick={() => {!edit?setEdit(true):handleEdit()}}><p className='text-green-500 text-xl'>{!edit?<i className="fa-solid fa-pen-to-square"></i>:<i className="fa-regular fa-circle-check"></i>}</p></span>
    <span className='capitalize font-semibold text-lg text-center px-2' onClick={handleRemove}><p className='text-red-500 text-xl'><i className="fa-solid fa-trash"></i></p></span>
      </div>
  )
} 

const MenuDisplay = () => {
  const [menuDishes, setMenuDishes] = useState([]);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fetchData = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(baseUrl+'/menu').then(res => { if (res) setMenuDishes(res.data)});
  },[]);

  const addProductToMenu = async (name,id) => {
    const yes = window.confirm('are you sure want to add?');
    if(!yes) return 0;
    const num =  Number(prompt('Enter number of plates'));
    await fetchData(baseUrl+'/menu','POST',{productId:id,platesAvailable:num},201);
    setMenuDishes(prev => [{ _id:Date.now(),productId:{ name:name,_id:id },platesAvailable:num },...prev]);
  }
    
  const handleRemove = async (id) => {
    try {
      const yes = window.confirm('are you sure to delete?');
      if(!yes) return 0;
    const data = await fetchData(baseUrl+`/menu/${id}`,'DELETE');
    if(data){
      //console.log('deleted');
      dispatch(showToast({ message:'Product deleted successfully from menu',type:'success'}));
      const copy = menuDishes.filter(item => item._id !== id);
      setMenuDishes(copy);
    }else{
      dispatch(showToast({ message:'An error occurred',type:'error'}));
    }
  } catch (err) {
    dispatch(showToast({ message:'An error occurred',type:'error'}));
  }
  }

  return(
    <>
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4 capitalize">Today's Menu Card</h1>
      <MenuSearchBar handleSearch={addProductToMenu} />
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
        </div>
        {
          menuDishes.map((dish,ind) => <MenuDish key={dish._id} dish={dish} handleRemove={() => handleRemove(dish._id)} fetchData={fetchData} />)
        }
      </div>
      </div>
    </>
  )
}

export default MenuDisplay