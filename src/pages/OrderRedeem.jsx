import React, { useEffect, useState } from 'react'
import QRCodeScanner from '../components/QRCodeScanner'
import useFetch from '../hooks/useFetch';
import OrderList from '../components/OrderList';
import Button from '../components/ui/Button';

const OrderRedeem = () => {
  const [result, setResult] = useState('');
  const [userOrder, setUserOrder] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [openQR, setOpenQR] = useState(false);

  const getOrder = useFetch();

  useEffect(() => {
    if (result !== '') {
      console.log(result);
      //setResult('');
      getOrder(baseURL+'/orders/redeem','POST',{orderId:result},200).then(res => {
        console.log(res);
        if (res) {
          if(res?.data){
            setUserOrder(prev => [res.data]);
          }
          alert('token redeemed');
        }else{
          alert('an error in getting order');
        }
      })
    }
  },[result]);

  return (
    <div className='flex flex-col items-center gap-2'>
      <Button text={`${openQR?'close QR':'scan QR'}`} handleClick={() => setOpenQR(p => !p)} end={false} />
      {
        openQR && <QRCodeScanner setResult={setResult} />
      }
        <div className='sm:w-[500px] p-2 w-full'>
        {
          result && (userOrder.length > 0?userOrder.map(order => <OrderList order={order} key={order._id} ready={true} />):'no orders available')
        }
        </div>
    </div>
  )
}

export default OrderRedeem