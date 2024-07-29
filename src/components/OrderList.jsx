import React, { useEffect, useState } from 'react'
import avatar from '../assets/person1.jpg'

const OrderItem = ({ product,toggleReadyStatus,isReady,ready }) => {

    return(
      <div className='py-1 px-3 shadow rounded flex'>
            <span className='flex flex-col flex-1'><p className={`font-semibold capitalize  ${!ready && isReady?"line-through italic":''}`}>{product.name}</p><p className={`text-sm text-gray-500 font-semibold ${!ready && isReady?"line-through italic":''}`}>Quantity : {product.quantity}</p></span>
            {!ready && <button onClick={!isReady?toggleReadyStatus:null} className='text-green-500 text-lg' >{!isReady?<i className="fa-regular fa-circle-check"></i>:<i className="fa-solid fa-circle-check"></i>}</button>}
      </div>
    )
  }

const OrderList = ({ order,handleOrderReady,handleProductReadyStatus,ready = false }) => {

  useEffect(() => {
    if (!ready) { 
      const isProductReady = order.productOrdered.every(product => product.productStatus === true);
      if (isProductReady) {
        handleOrderReady(order._id);
      }
    }
  },[]);

    const toggleReadyStatus = (orderId, productId) => {
        handleProductReadyStatus(orderId,productId);
    };

  return (
    <div className='flex flex-col'>
        <div className='flex gap-2 w-full'>
      <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-semibold capitalize text-slate-900 text-sm">{order.userId.name}</p>
        <p className="text-sm text-gray-500">Order ID: {order._id}</p>
      </div>
        </div>
        <div className='border-l-2 ml-5 pl-3 py-2 flex flex-col gap-1'>
          {
            order.productOrdered.map((product,ind) => <OrderItem key={ind} product={product} toggleReadyStatus={() => toggleReadyStatus(order._id,product.productId)} isReady={product.productStatus} ready={ready} />)
          }
        </div>
      </div>
  )
}

export default OrderList