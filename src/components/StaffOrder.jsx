import React, { useState } from "react";
import avatar from '../assets/person1.jpg'

const initialUsersData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/40",
    foodItems: [
      { id: 1, name: "Pizza", status: "Pending" },
      { id: 2, name: "Burger", status: "Pending" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://via.placeholder.com/40",
    foodItems: [
      { id: 3, name: "Pasta", status: "Pending" },
      { id: 4, name: "Salad", status: "Pending" },
    ],
  },
];

function StaffOrder() {
  const [users, setUsers] = useState(initialUsersData);

  const toggleStatus = (userId, itemId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          const updatedFoodItems = user.foodItems.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  status: item.status === "Pending" ? "Ready" : "Pending",
                }
              : item
          );
          return { ...user, foodItems: updatedFoodItems };
        }
        return user;
      })
    );
  };

  const pendingUsers = users.filter((user) =>
    user.foodItems.some((item) => item.status === "Pending")
  );

  const readyUsers = users.filter(
    (user) =>
      user.foodItems.length > 0 &&
      user.foodItems.every((item) => item.status === "Ready")
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Food Status</h1>
      <div className="flex gap-4 w-full">
        {/* Pending Column */}
        <div className="flex-1 shadow-lg rounded-lg p-4 bg-slate-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending</h2>
          {pendingUsers.length === 0 ? (
            <p className="text-gray-500">No pending items.</p>
          ) : (
            pendingUsers.map((user) => (
              <div key={user.id} className="mb-6 border-gray-300 rounded p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {user.name}
                    </h2>
                    <p className="text-gray-500">Pending</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {user.foodItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center p-3 bg-gray-100 rounded hover:bg-gray-200 transition duration-200"
                    >
                      <span className="text-lg text-gray-800">{item.name}</span>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={item.status === "Ready"}
                          onChange={() => toggleStatus(user.id, item.id)}
                          className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Ready Column */}
        <div className="flex-1 shadow-lg rounded-lg p-4 bg-slate-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ready</h2>
          {readyUsers.length === 0 ? (
            <p className="text-gray-500">No ready items.</p>
          ) : (
            readyUsers.map((user) => (
              <div key={user.id} className="mb-6 border border-gray-300 rounded p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {user.name}
                    </h2>
                    <p className="text-gray-500">Ready</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {user.foodItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center p-3 bg-gray-100 rounded hover:bg-gray-200 transition duration-200"
                    >
                      <span className="text-lg text-gray-800">{item.name}</span>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={item.status === "Ready"}
                          onChange={() => toggleStatus(user.id, item.id)}
                          className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-500"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffOrder;