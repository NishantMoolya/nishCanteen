import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import useFetch from '../hooks/useFetch';

const CanteenOrders = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fetchData = useFetch();

  const [pendingDishes, setPendingDishes] = useState([]);
  const [readyDishes, setReadyDishes] = useState([]);

  useEffect(() => {
    fetchData(baseURL+'/orders'+'?status=paid').then(res => {if(res) setPendingDishes(res.data); console.log(res);});
    fetchData(baseURL+'/orders'+'?status=ready').then(res => {if(res) setReadyDishes(res.data); console.log(res);});
     },[]);


    const handleOrderReady = async (orderId) => {
      const res = await fetchData(baseURL+'/orders'+`/${orderId}?status=paid`,'PATCH');
      //console.log(res,orderId);
      if(res) window.location.reload()
      else alert('cannot update')
      };

    const handleProductReadyStatus = async (orderId,productId) => {
      const res = await fetchData(baseURL+'/orders'+`/${orderId}/${productId}`,'PATCH');
      console.log(res,orderId,productId);
      if(res) window.location.reload()
      else alert('cannot update')
      };

  return (
    <div className='flex gap-2 py-4 px-2'>
      <div className='flex-1 flex flex-col gap-2'>
        <p className='font-semibold text-xl text-slate-900 capitalize text-center'>Pending orders</p>
      {
        pendingDishes.map((order) => <OrderList key={order._id} order={order} handleOrderReady={handleOrderReady} handleProductReadyStatus={handleProductReadyStatus} ready={false} />)
      }
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <p className='font-semibold text-xl text-slate-900 capitalize text-center'>Ready to pickup</p>
      {
        readyDishes.map((order) => <OrderList key={order._id} order={order} ready={true} />)
      }
      </div>
    </div>
  )
}

export default CanteenOrders