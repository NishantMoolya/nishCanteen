import React, { useState } from 'react';
import Chip from './ui/Chip';
import TagChip from './ui/TagChip';
import Button from './ui/Button';
import usePost from '../hooks/usePost';
import OutlineButton from './ui/OutlineButton';
import { showToast } from '../redux/reducers/toastReducer';
import { useDispatch } from 'react-redux';

const Input = ({ name,type="text",label,textarea=false,accept="",handleChange,value }) => {
  return(
    <div className='flex flex-col gap-1'>
        <label htmlFor={name} className='text-slate-900 font-semibold capitalize'>{label}</label>
        {textarea?<textarea name={name} onChange={handleChange} value={value} className='border py-1 px-3 rounded outline-none text-slate-900 font-semibold focus:border-slate-500' autoComplete='off' required />
        :<input type={type} name={name} onChange={handleChange} value={value} className='border py-1 px-3 rounded outline-none text-slate-900 font-semibold focus:border-slate-500' accept={accept} autoComplete='off' required />}
    </div>
  )
}

const Checkbox = ({ label,name,handleChange }) => {
  return(<span className='flex items-center gap-4'>
    <label htmlFor={name} className='flex-1 text-left text-slate-900 capitalize font-semibold hover:text-green-500'>{label}</label><input type="checkbox" name={name} id={name} onChange={handleChange} />
    </span>)
}

const ProductForm = ({ initialProduct,onClose,edit=false,postData }) => {
  const [product, setProduct] = useState(initialProduct);

  const initialTags = ["spicy","tangy",'sweet','hot','cool','sour','coldrink'];
  const [tags, setTags] = useState(initialProduct.tags);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleTagSelect = (tag,selected) => {
    if (selected) {
      const copy = tags.filter(val => val !== tag);
      setTags(copy);
    }else{
      setTags(prev => [...prev,tag]);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
    setIsLoading(true);
    const { category,name,description,rating,price,image,isVeg } = product;
    const data = await postData({category:category.trim(),name:name.trim(),description:description.trim(),rating:rating,price:price,image,isVeg,tags:tags});
    if(data != null){
      dispatch(showToast({ message:'Product added successfully',type:'success'}));
      setProduct(initialProduct);
      onClose();
    }else{
      dispatch(showToast({ message:'Cannot add product',type:'error'}));
    }
  } catch (err) {
    dispatch(showToast({ message:'An error in submitting form',type:'error'}));
  }finally{
    setIsLoading(false);
  }
  };

  return (
    <div className='shadow rounded p-4 w-[400px] bg-white ml-auto animate-slide-in'>
      <span className='flex items-center justify-between'>
        <p className='text-slate-500 font-semibold text-sm'>Categories</p>
        <p className='text-xl text-red-500' onClick={onClose}><i className="fa-regular fa-circle-xmark"></i></p>
        </span>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <Input name={'name'} label={'name'} handleChange={handleInputChange} value={product.name} />
        <Input name={'description'} label={'description'} textarea={true} value={product.description} handleChange={handleInputChange} />
        <Input name={'price'} label={'price(Rs)'} type={'number'} handleChange={handleInputChange} value={product.price} />
        <Input name={'category'} label={'category'} handleChange={handleInputChange} value={product.category} />
        <div className='flex flex-col gap-1'>
        <label htmlFor={'isVeg'} className='text-slate-900 font-semibold capitalize'>is it vegetarian dish</label>
        <label>Yes <input type={'radio'} name={'isVeg'} value={true} defaultChecked={product.isVeg} onChange={handleInputChange} className='border py-1 px-3 rounded outline-none text-slate-900 font-semibold focus:border-slate-500' autoComplete='off' required /></label>
        <label>No <input type={'radio'} name={'isVeg'} value={false} defaultChecked={product.isVeg} onChange={handleInputChange} className='border py-1 px-3 rounded outline-none text-slate-900 font-semibold focus:border-slate-500' autoComplete='off' required /></label>
        </div>
        {/* <Input name={'image'} label={'image'} type={'file'} accept={'image/*'} handleChange={handleInputChange} /> */}
        <div className='flex flex-col gap-2 py-1'>
        <label htmlFor={'tags'} className='text-slate-900 font-semibold capitalize'>Tags</label>
        <div className='flex flex-wrap gap-2 items-center'>
          {
            initialTags.map((tag,ind) => <TagChip key={ind} text={tag} selected={tags.includes(tag)} handleSelect={handleTagSelect} />)
          }
        </div>
          </div>
          <div className='flex items-center justify-between'>
          {!isLoading?<>
          <OutlineButton text={'cancel'} color={'orange'} handleClick={onClose} />
          <Button text={edit?'edit product':'add product'} type='submit' />
          </>:'loading'}
          </div>
      </form>
    </div>
  );
};

export default ProductForm;