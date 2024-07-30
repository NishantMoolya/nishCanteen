import React from 'react';

const Coin = ({ amount, currency }) => {
  return (
      <div className="relative">
        <div className="bg-orange-400 rounded-full w-10 h-10 shadow-lg flex items-center justify-center relative transform transition-transform duration-200 hover:scale-105">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 transform scale-95"></div>
          <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
            <span className="text-base font-bold text-white">{amount}</span>
            <span className="text-sm text-white">{currency}</span>
          </div>
        </div>
      </div>
  );
};

export default Coin;