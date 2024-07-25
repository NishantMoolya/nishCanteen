import React from 'react'
import { useSelector } from 'react-redux'
import Coin from './Coin'

const SingleToken = ({ token }) => {
    return(
        <div className='w-40 h-40 flex items-center justify-center text-lg text-green-500 bg-slate-100 rounded shadow'>{token}</div>
    )
}
const Token = () => {
    const tokens = useSelector(state => state.user.token);
  return (
    <div className='flex items-center gap-4 justify-center'>{
        tokens.map((token,ind) => <SingleToken token={token} />)
    }
    <Coin />
    </div>
  )
}

export default Token