import React from 'react';

const Favorites = () => {
  return (
    <div className="py-20 text-light menu_back_img bg-cover bg-center h-full bg-no-repeat bg-opacity-60">
      <div className="flex flex-col items-center bg-black bg-opacity-50 py-6">
        <h2 className="text-4xl mb-10 uppercase font-bold text-white">Our Favorites</h2>
        <div className="flex flex-wrap mb-10 w-full">
          <div className="w-full lg:w-1/2 flex flex-col items-center mb-10 lg:mb-0">
            <h3 className="text-2xl mb-10 text-white font-bold">Food</h3>
            <ul className="list-none p-0 flex flex-col gap-8">
              <li className="flex justify-between">
                <p className="text-2xl mx-2 text-white font-bold">Biryani</p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹80</p>
              </li>
              <li className="flex justify-between">
                <p className="text-2xl mx-2 text-white font-bold">Special Meal</p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹60</p>
              </li>
              <li className="flex justify-between">
                <p className="text-2xl mx-2 text-white font-bold">Parota</p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹45</p>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center mb-10 lg:mb-0">
            <h3 className="text-2xl mb-10 text-white font-bold">Drinks</h3>
            <ul className="list-none p-0 flex flex-col gap-8">
              <li className="flex justify-between ">
                <p className="text-2xl mx-2 text-white font-bold">Coffee </p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹20</p>
              </li>
              <li className="flex justify-between">
                <p className="text-2xl mx-2 text-white font-bold">Juice</p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹50</p>
              </li>
              <li className="flex justify-between">
                <p className="text-2xl mx-2 text-white font-bold">Spirits</p>
                <p className="text-2xl mx-2 text-green-500 font-bold">₹50</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;