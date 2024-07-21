import React from 'react';

const StaffTable = () => {
  const staffData = [
    { name: 'John Doe', id: 'S001', gender: 'Male', age: 35,present:'Yes' },
    { name: 'Jane Smith', id: 'S002', gender: 'Female', age: 28,present:'Yes' },
    { name: 'Michael Johnson', id: 'S003', gender: 'Male', age: 42,present:'Yes' },
    { name: 'Emily Davis', id: 'S004', gender: 'Female', age: 31,present:'Yes' },
    { name: 'David Wilson', id: 'S005', gender: 'Male', age: 27,present:'Yes' },
    { name: 'John Doe', id: 'S001', gender: 'Male', age: 35,present:'Yes' },
    { name: 'Jane Smith', id: 'S002', gender: 'Female', age: 28,present:'Yes' },
    { name: 'Michael Johnson', id: 'S003', gender: 'Male', age: 42,present:'Yes' },
    { name: 'Emily Davis', id: 'S004', gender: 'Female', age: 31,present:'Yes' },
    { name: 'David Wilson', id: 'S005', gender: 'Male', age: 27,present:'Yes' },
  ];

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-slate-200">
          <th className="px-4 py-2 text-center">Staff Name</th>
          <th className="px-4 py-2 text-center">Staff ID</th>
          <th className="px-4 py-2 text-center">Gender</th>
          <th className="px-4 py-2 text-center">Age</th>
          <th className="px-4 py-2 text-center">Today present</th>
        </tr>
      </thead>
      <tbody>
        {staffData.map((staff, index) => (
          <tr
            key={index}
            className={`border-b ${
              index % 2 === 0 ? 'bg-slate-100' : 'bg-white'
            }`}
          >
            <td className="px-4 py-2 text-center">{staff.name}</td>
            <td className="px-4 py-2 text-center">{staff.id}</td>
            <td className="px-4 py-2 text-center">{staff.gender}</td>
            <td className="px-4 py-2 text-center">{staff.age}</td>
            <td className="px-4 py-2 text-center">{staff.present}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;