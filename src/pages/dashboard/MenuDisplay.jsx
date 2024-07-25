import React, { useEffect, useState } from 'react';
import usePost from '../../hooks/usePost';
import MenuSearchBar from '../../components/MenuSearchBar';
import useFetch from '../../hooks/useFetch';

const MenuDish = ({ dish,handleRemove }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(dish.platesAvailable);
  const modifyData = usePost('/menu',`/${dish._id}`,'PATCH');

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  }
  const handleEdit = () => {
    setEdit(true);
  }
  const handleSubmit = async () => {
    try {
    const data = await modifyData({platesAvailable:value});
    if(data){
      console.log('updated');
    }else{
      alert('failed');
    }
  } catch (err) {
      
  }finally{
    setEdit(false);
  }
  }

  return(
    <div className='flex items-center gap-2 justify-stretch'>
    <span className='flex-1 capitalize font-semibold text-lg text-center py-1 px-3 rounded shadow bg-green-500 text-white'>{dish.productId.name}</span>
    <input type='number' disabled={!edit} onChange={handleChange} value={value} className={`w-1/4 capitalize border font-semibold text-lg text-center py-1 px-3 rounded shadow ${edit?'bg-white text-orange-500':'bg-orange-500 text-white'}`} />
    <span className='capitalize font-semibold text-lg text-center px-2' onClick={!edit?handleEdit:handleSubmit}><p className='text-green-500 text-xl'>{!edit?<i className="fa-solid fa-pen-to-square"></i>:<i className="fa-regular fa-circle-check"></i>}</p></span>
    <span className='capitalize font-semibold text-lg text-center px-2' onClick={handleRemove}><p className='text-red-500 text-xl'><i className="fa-solid fa-trash"></i></p></span>
      </div>
  )
} 

const MenuDisplay = () => {
  const [menuDishes, setMenuDishes] = useState([]);
  // const [dishId, setDishId] = useState('hh');
  const getData = useFetch('/menu/search');

  useEffect(() => {
    getData().then(res => {
      if (res) {
        setMenuDishes(res.data);
      }
    })
  },[]);

  const postData = usePost('/menu','/','POST');

  const addProductToMenu = async (name,id) => {
    const num =  Number(prompt('Enter number of plates'));
    const data = await postData({productId:id,platesAvailable:num});
    setMenuDishes(prev => [{ _id:Date.now(),productId:{ name:name,_id:id },platesAvailable:num },...prev]);
  }

  const baseUrl = process.env.REACT_APP_BASE_URL;
    const deleteData = async (url) => {
        try {
        let options = {
            method:"DELETE",
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
    
  const handleRemove = async (id) => {
    try {
      const yes = window.confirm('are you sure to delete?');
      if(!yes) return 0;
    const data = await deleteData(`/menu/${id}`);
    if(data){
      console.log('deleted');
      const copy = menuDishes.filter(item => item._id !== id);
      setMenuDishes(copy);
    }else{
      alert('failed');
    }
  } catch (err) {
      
  }
  }

  return(
    <>
      <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4 capitalize">Today's Menu Card</h1>
      <MenuSearchBar addProductToMenu={addProductToMenu} />
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
      {/* <span className='w-1/2  capitalize font-semibold text-lg text-center text-slate-500'>Dish name</span><span className='w-1/6 capitalize font-semibold text-lg text-center text-slate-500'>Plates to be serverd</span><span className='w-1/6  capitalize font-semibold text-lg text-center'>Edit</span><span className='w-1/6  capitalize font-semibold text-lg text-center'>Remove</span> */}
        </div>
        {
          menuDishes.map((dish,ind) => <MenuDish key={dish._id} dish={dish} handleRemove={() => handleRemove(dish._id)} />)
        }
      </div>
      </div>
    </>
  )
}

export default MenuDisplay
{/* <Searchbar /> */}