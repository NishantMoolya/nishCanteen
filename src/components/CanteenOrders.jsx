// src/OrderList.js
import React, { useEffect, useState } from 'react';
import avatar from '../assets/person1.jpg'


const OrderList = ({ orders,lock }) => {
  // State to manage the readiness of each product
  const [readyStatus, setReadyStatus] = useState({});

  // Function to toggle the ready status of a product
  const toggleReadyStatus = (orderId, productId) => {
    setReadyStatus(prevState => {
      const newStatus = {
        ...prevState,
        [`${orderId}-${productId}`]: !prevState[`${orderId}-${productId}`],
      };
      // Check if all products for the order are ready
      if (areAllProductsReady(orderId, newStatus)) {
        handleOrderReady(orderId); // Custom logic when all products are ready
      }
      return newStatus;
    });
  };

  // Function to check if all products in an order are ready
  const areAllProductsReady = (orderId, status) => {
    return orders.find(order => order._id === orderId).productOrdered.every(product => {
      return status[`${orderId}-${product.productId}`] === true;
    });
  };

  const baseURL = process.env.REACT_APP_BASE_URL;
  const placeOrder = async (status,orderId) => {
    try {
    const res = await fetch(`${baseURL}/orders/${orderId}?status=${status}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        credentials:'include',
        body:JSON.stringify({token:'hello'})   
    });
    const data = await res.json();
    if(res.status === 200){
     return data;
    }else{
      alert('cannot place order');
      return null;
    }
  } catch (err) {
      return null;
  }
  }
  // Custom logic when all products are ready
  const handleOrderReady = async (orderId) => {
  console.log(`All products for Order ID: ${orderId} are ready!`);
  const data = await placeOrder('paid',orderId);
  if(data){
    window.location.reload();
}else{
      console.log('cannot update');
  }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {orders.length !== 0?orders.map(order => (
        <div key={order._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={avatar} // Placeholder for user avatar
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <span className="font-semibold">{order.userId.name}</span>
              <div className="text-sm text-gray-500">Order ID: {order._id}</div>
            </div>
          </div>

          <h3 className="font-semibold mt-4">Products Ordered:</h3>
          <ul className="list-disc list-inside">
            {order.productOrdered.map(product => (
              <li key={product.productId} className="flex items-center">
                {!lock && <input
                  type="checkbox"
                  checked={readyStatus[`${order._id}-${product.productId}`] || false}
                  onChange={() => toggleReadyStatus(order._id, product.productId)}
                  className="mr-2"
                />}
                <span className={readyStatus[`${order._id}-${product.productId}`] ? 'line-through text-gray-500' : ''}>
                  {product.name} - Quantity: {product.quantity}
                </span>
                {!lock&&<button
                  onClick={() => toggleReadyStatus(order._id, product.productId)}
                  className="ml-auto text-green-500 hover:text-green-700 focus:outline-none"
                  aria-label="Mark as ready"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>}
              </li>
            ))}
          </ul>
          <div className="text-gray-500 text-sm mt-2">
            <span>Order Placed At: {new Date(order.createdAt).toLocaleString()}</span>
          </div>
        </div>
      )):"no orders available"}
    </div>
  );
};


const CanteenOrders = () => {
    const [pendingDishes, setPendingDishes] = useState([]);
  const [readyDishes, setReadyDishes] = useState([]);

  const baseURL = process.env.REACT_APP_BASE_URL;
  const placeOrder = async (status) => {
    try {
    const res = await fetch(`${baseURL}/orders?status=${status}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
        credentials:'include'   
    });
    const data = await res.json();
    if(res.status === 200){
     return data;
    }else{
      alert('cannot place order');
      return null;
    }
  } catch (err) {
      return null;
  }
  }

  useEffect(() => {
    placeOrder('paid').then(res => {setPendingDishes(res.orders); console.log(res);});
    placeOrder('ready').then(res => {setReadyDishes(res.orders); console.log(res);});
  },[]);

    const orderData = {
        orders: [
          {
            _id: "66a1f8db16a72e346efaf1dc",
            userId: {
              _id: "66a1f3c1590d73b2ce3286ac",
              name: "Nishant"
            },
            productOrdered: [
              {
                productId: "66a1f7f616a72e346efaf1b9",
                name: "panipuri",
                quantity: 2,
                orderPlacedAt: "2024-07-25T06:55:50.410Z",
                productStatus: false,
                _id: "66a1f8db16a72e346efaf1dd"
              },
              {
                productId: "66a1f87516a72e346efaf1cb",
                name: "shevpuri",
                quantity: 2,
                orderPlacedAt: "2024-07-25T06:55:50.410Z",
                productStatus: false,
                _id: "66a1f8db16a72e346efaf1de"
              }
            ],
            status: "paid",
            token: 8592,
            isTokenValid: true,
            createdAt: "2024-07-25T07:03:55.125Z",
            updatedAt: "2024-07-25T07:03:55.125Z",
            __v: 0
          }
        ],
        message: "orders received first 10"
      };
  return (
    <div className='flex gap-2'>
        <div className='flex-1 border p-2 m-2 rounded'>
            <p className='text-lg capitalize font-semibold text-center'>Pending</p>
    <OrderList orders={pendingDishes} />
        </div>
        <div className='flex-1 border p-2 m-2 rounded'>
        <p className='text-lg font-semibold text-center'>Ready</p>
    <OrderList orders={readyDishes} lock={true} />
        </div>
  </div>
  )
}

export default CanteenOrders