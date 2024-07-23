// src/SlidingAddProductForm.js

import React, { useState } from 'react';

const SlidingAddProductForm = ({ onClose }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Simulate submission and close the form
    setTimeout(onClose, 300); // Adjust timeout to match the slide-out duration
  };

  return (
    <div className="absolute top-0 right-0 h-full w-96 bg-white shadow-lg p-8 transition-transform transform translate-x-0 z-50">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

const SlidingAddProduct = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleForm}
        className="bg-green-500 text-white font-medium py-2 px-4 rounded-md"
      >
        {isVisible ? 'Close' : 'Add Product'}
      </button>
      {isVisible && (
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } z-40`}
          onClick={toggleForm}
        />
      )}
      <div
        className={`absolute top-0 right-0 h-full w-96 bg-white shadow-lg p-8 transition-transform transform ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <SlidingAddProductForm onClose={toggleForm} />
      </div>
    </div>
  );
};

export default SlidingAddProduct;