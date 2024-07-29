import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QRCode from '../components/QRCode'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const auth = useSelector(state => state.user.auth);
    const tokens = useSelector(state => state.user.tokens);
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth) navigate('/');
    },[auth]);
  
  return (
    <>
    {auth && <div className='flex items-center gap-4 justify-center'>
      {
        tokens.map(token => <QRCode token={token} />)
      }
    </div>}
    </>
  )
}

export default Profile