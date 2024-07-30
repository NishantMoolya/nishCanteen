import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QRCode from '../components/QRCode'
import { NavLink, useNavigate } from 'react-router-dom';
import Coin from '../components/ui/Coin';
import avatar from '../assets/person1.jpg'
import Button from '../components/ui/Button';

const Profile = () => {
    const user = useSelector(state => state.user);
    const tokens = useSelector(state => state.user.tokens);
  
  return (
    <>
    <div className="flex flex-col items-center sm:justify-center min-h-screen">
      <div className="bg-white flex flex-col gap-2 sm:shadow-md sm:rounded-lg p-4 w-full sm:max-w-md">
        <div className="flex flex-col gap-1 items-center">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold capitalize">{user.name}</h2>
          <p className="text-gray-600 capitalize">{user.type}</p>
          <p className="text-gray-500">Hello,user purchase on our digital canteen platform with the help of special app coins available in coin center named nishCoins</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='capitalize text-lg font-semibold text-orange-500'>current coin balance</p>
          <Coin amount={user.coinBalance} />
        </div>
        <div className='flex justify-end mt-1'>
          <NavLink to={'/coins'}><Button text={'purchase coins'} end={true} /></NavLink>
        </div>
      <h3 className="text-lg font-semibold capitalize">My order tokens</h3>
    <div className='flex items-center gap-4 justify-center'>
      {
        tokens.map(token => <QRCode token={token} />)
      }
    </div>
      </div>
      </div>
    </>
  )
}

export default Profile