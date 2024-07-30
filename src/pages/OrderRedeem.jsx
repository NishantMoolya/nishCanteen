import React, { useEffect, useState } from 'react'
import QRCodeScanner from '../components/QRCodeScanner'
import useFetch from '../hooks/useFetch';
import OrderList from '../components/OrderList';
import Button from '../components/ui/Button';
import { useDispatch } from 'react-redux';
import { showToast } from '../redux/reducers/toastReducer';

const OrderRedeem = () => {
  const [result, setResult] = useState('');
  const [userOrder, setUserOrder] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [openQR, setOpenQR] = useState(false);

  const getOrder = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result !== '') {
      //console.log(result);
      //setResult('');
      getOrder(baseURL+'/orders/redeem','POST',{orderId:result},200).then(res => {
        //console.log(res);
        if (res) {
          if(res?.data){
            setUserOrder(prev => [res.data]);
          }
          dispatch(showToast({ message:'Token Redeemed',type:'success'}));
        }else{
          dispatch(showToast({ message:'An error in getting order',type:'error'}));
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