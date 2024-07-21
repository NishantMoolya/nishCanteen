import React from 'react';

const DishMenu = () => {
  const dishData = [
    { name: 'Spaghetti Bolognese', price: 12.99, category: 'Main' },
    { name: 'Caesar Salad', price: 8.50, category: 'Salad' },
    { name: 'Margherita Pizza', price: 10.75, category: 'Pizza' },
    { name: 'Grilled Salmon', price: 16.25, category: 'Main' },
    { name: 'Chocolate Cake', price: 5.99, category: 'Dessert' },
  ];

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-slate-200">
          <th className="px-4 py-2 text-center">Dish</th>
          <th className="px-4 py-2 text-center">Price</th>
          <th className="px-4 py-2 text-center">Category</th>
        </tr>
      </thead>
      <tbody>
        {dishData.map((dish, index) => (
          <tr
            key={index}
            className={`border-b ${
              index % 2 === 0 ? 'bg-slate-100' : 'bg-white'
            } m-1 `}
          >
            <td className="px-4 py-2 text-center ">{dish.name}</td>
            <td className="px-4 py-2 text-center">${dish.price.toFixed(2)}</td>
            <td className="px-4 py-2 text-center">{dish.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DishMenu;