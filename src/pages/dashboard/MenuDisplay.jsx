import React from 'react'
import Searchbar from '../../components/Searchbar'
import Button from '../../components/ui/Button'
import DishMenu from '../../components/MenuTable'

const MenuItem = ({ itemName }) => {
  return(<div className='flex items-center gap-2'>
    <div className='shadow py-1 flex-1 px-4 bg-sky-500 text-white rounded'>{itemName}</div>
    <button className='uppercase font-semibold text-sm py-1 px-3 shadow rounded text-white bg-green-500'><i className="fa-solid fa-pen-to-square"></i> edit</button>
    <button className='uppercase font-semibold text-sm py-1 px-3 shadow rounded text-white bg-red-500'><i className="fa-solid fa-trash"></i> delete</button>
  </div>)
}
const MenuDisplay = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Searchbar />
        <Button text={'add dish'} />
        {/* <DishMenu /> */}
        {
          Array(10).fill(0).map((val,ind) => <MenuItem itemName={'cdnsnjncmdsl'} key={ind} />)
        } 
    </div>
  )
}

export default MenuDisplay