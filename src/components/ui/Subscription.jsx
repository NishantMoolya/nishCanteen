import React from 'react';
import Coin from './Coin';
import Button from './Button';

const Subscription = ({ title, price, recommended = false,onPurchase }) => {
    return (
        <div className='flex flex-col bg-white px-6 py-8 rounded-3xl gap-6 text-gray-700 max-w-80 hover:border-gray-300 border-transparent hover:scale-105 transition-all duration-200 shadow'>
            <div className='flex flex-col gap-2'>
                <h4 className='capitalize text-green-500 font-bold'>{title}</h4>
                <Coin amount={price} />
                <p className='capitalize'>Purchase plan <span className='text-green-500'>worth Rs100</span></p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='first-letter:capitalize font-semibold text-gray-900'>everything in Free</p>
                <div className='flex gap-4'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </span>
                    <p className='first-letter:capitalize break-words'>collect nishCoins for purchasing the order and no credit card or real cash is needed</p>
                </div>
            </div>
            {recommended && (
                <button className='capitalize text-green-500 bg-green-200 self-center py-1 px-6 rounded-3xl font-bold bg-opacity-20 hover:bg-opacity-30'>
                    recommended
                </button>
            )}
            <Button text={'get 100 coins'} end={false} handleClick={onPurchase} />
        </div>
    );
}

export default Subscription;