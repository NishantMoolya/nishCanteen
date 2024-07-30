import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const auth = useSelector(state => state.user.auth);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (isLoading) {   
            timer = setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
        return () => clearTimeout(timer);
    },[]);

  return (
    <>{
        isLoading?'Loading':auth?children:navigate('/login')
    }
    </>
  )
}

export default PrivateRoute