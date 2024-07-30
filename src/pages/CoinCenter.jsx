import React from 'react'
import Subscription from '../components/ui/Subscription'
import { useDispatch } from 'react-redux'
import { purchaseCoins } from '../redux/api/userApi'
import { showToast } from '../redux/reducers/toastReducer'

const CoinCenter = () => {

  const dispatch = useDispatch();
  return (
    <div className='flex justify-center items-center px-2 py-4'>
        <Subscription title="Freemium Plan" price={100} recommended={true} onPurchase={() => {dispatch(purchaseCoins(100));dispatch(showToast({ message:'Purchased coins successfully',type:'success'}));}} />
    </div>
  )
}

export default CoinCenter