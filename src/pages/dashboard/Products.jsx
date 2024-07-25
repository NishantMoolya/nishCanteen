import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/ProductForm'
import Button from '../../components/ui/Button';
import usePagination from '../../hooks/usePagination';
import EditDish from '../../components/EditDish';
import usePost from '../../hooks/usePost';

const Products = () => {
  const initialProduct = {
    name: '',
    description: '',
    price: '',
    image: '',
    category:'',
    isVeg:false,
    tags:[]
  } 
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [addProduct, setAddProduct] = useState(false);
  const [productList,setProductList] = useState([]);
  const [isEdit,setIsEdit] = useState(false);
  const [productId,setProductId] = useState('');
  const [page,setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);
  const [pageEnd,setPageEnd] = useState(false);

  const getData = usePagination('/products');
  const postData = usePost('/products','/','POST');
  const patchData = usePost('/products',productId,'PATCH');

  useEffect(() => {
    getData(page).then(res => {
      if (res) {
        if (res.products.length !== 0) {
          setProductList(prev => [...prev,...res.products]);
          setPageEnd(false);
        }else{
          setPageEnd(true);
        }
      }
    }).finally(() => setIsLoading(false));
  },[page]);

  const handleEdit = (value) => {
    setCurrentProduct(value);
    setAddProduct(true);
    setIsEdit(true);
    setProductId(value?._id);
  }

  const handleAddProduct = () => {
    setAddProduct(p => !p);
    setCurrentProduct(initialProduct);
    setIsEdit(false);
    setProductId('');
  }

  const handleViewMore = () => {
    setIsLoading(true);
    setPage(prev => prev+1);
  }



  return (
    <div className="flex flex-col gap-2">
    <h1 className="text-2xl font-bold mb-4">Product Management</h1>
    <Button text={`${addProduct?'cancel':'add product'}`} handleClick={handleAddProduct} />
      <div className='flex justify-evenly gap-4 flex-wrap relative'>
        {
          productList.map((product,ind) => <EditDish key={product?._id} dish={product} order={false} handleEdit={() => handleEdit(product)} />)
        }
        {addProduct && <div className='flex absolute top-0 right-0'><ProductForm initialProduct={currentProduct} onClose={() => setAddProduct(false)} edit={isEdit} postData={isEdit?patchData:postData} /> </div>}
      </div>
        {!isLoading?!pageEnd?<span className='w-full flex items-center justify-center'><Button text={'view more'} handleClick={handleViewMore} /></span>:'no more products':'Loading'}
  </div>
  )
}

export default Products