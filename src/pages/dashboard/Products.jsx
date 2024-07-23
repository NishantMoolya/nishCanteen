import React, { useState } from 'react'
import ProductForm from '../../components/ProductForm'
import Button from '../../components/ui/Button';

const Products = () => {
  const initialProduct = {
    name: 'idli',
    description: '',
    price: '',
    image: '',
    category:'',
    isVeg:false,
    tags:[]
  } 
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [addProduct, setAddProduct] = useState(false);
  
  return (
    <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold mb-4">Product Management</h1>
    {addProduct?<div className='flex'><ProductForm initialProduct={currentProduct} onClose={() => setAddProduct(false)} /> </div>:<Button text={`${addProduct?'cancel':'add product'}`} handleClick={() => setAddProduct(p => !p)} />}
  </div>
  )
}

export default Products