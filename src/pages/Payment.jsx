import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/ui/Button'
import useFetch from '../hooks/useFetch'
import { clearCart } from '../redux/reducers/dishReducer'
import { addToken, updateCoinBalance } from '../redux/reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import { showToast } from '../redux/reducers/toastReducer'

const DishList = ({ dish }) => {
  return(<div className={`bg-white flex gap-2 text-slate-500 sm:w-full overflow-hidden`}>
    <img src={dish.image} alt="dish" className='w-16 h-16 rounded' />
    <section className={`flex flex-col justify-center flex-1 gap-1`}>
        <h5 className={`text-slate-900 first-letter:capitalize font-bold text-base`}>{dish.name}</h5>
        <p>Rs{dish.price} x {dish.quantity} = <span className='font-semibold'>Rs{dish.price*dish.quantity}</span></p>
    </section>
</div>)
}
const Payment = () => {
  const dishData = useSelector(state => state.dish);
  const coinBalance = useSelector(state => state.user.coinBalance);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = useFetch();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const amount = useMemo(() => dishData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2),[dishData]);
  const totalQuantity = useMemo(() => dishData.reduce((total, item) => total + item.quantity, 0),[dishData]);

  const placeOrder = async () => {
    const sendDish = dishData.map(({ image, ...rest }) => rest);
    const res = await fetchData(baseURL+'/orders','POST',{productOrdered:sendDish,amount:amount},201);
    if(res){
      dispatch(clearCart());
      dispatch(addToken(res.data));
      dispatch(updateCoinBalance(amount));
      dispatch(showToast({ message:'Paid and Order placed',type:'success'}));
      navigate('/menu');
    }else{
      dispatch(showToast({ message:'Cannot place order',type:'error'}));
    }
  }

  const isCartEmpty = !useMemo(() => dishData.length > 0,[dishData]);
  useEffect(() => {
    if (isCartEmpty) {
      navigate('/');
    }
  },[dishData]);

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[500px] shadow rounded p-2 m-2 relative'>
        <p className='text-xl font-semibold text-slate-900 text-center capitalize'>Order summary</p>
        <span className='bg-green-50 py-1 px-3 rounded-xl absolute top-4 right-4'><p className='text-green-500 text-sm font-semibold capitalize text-center'>unpaid</p></span>
        <div className='flex flex-col gap-2 mt-2'>
        {
          dishData.map((dish) => <DishList dish={dish} />)
        }
        </div>
        <div className='flex flex-col py-2'>
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total items</p>
          <p className='text-green-500 font-bold text-lg'>{totalQuantity}</p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Total amount</p>
          <p className='text-green-500 font-bold text-lg'>{amount}</p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
          <p className='text-orange-500 font-bold text-lg capitalize'>Wallet balance</p>
          <p className='text-green-500 font-bold text-lg'>{coinBalance}</p>
      </div>
      </div>
      {coinBalance >= amount?<Button text={`pay ${amount}`} handleClick={placeOrder} />: <p className='text-green-500 font-semibold text-center'>Not enough coins to pay</p>}
    </div>
    </div>
  )
}

export default Payment