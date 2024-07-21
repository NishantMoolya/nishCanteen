import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import OutlineButton from './ui/OutlineButton'
import Checkout from '../pages/Checkout'

const Link = ({ label, route,indicate,handleOnclick }) => {
  return(<li className='hover:text-slate-500 relative capitalize text-sm text-center font-semibold ' onClick={handleOnclick}><NavLink to={route}>{label}</NavLink>
  {indicate && <span className="block w-full h-[2px] absolute bg-green-500 mt-[2px] rounded-full animate-slide-in"></span>}</li>)
}
const CenteredNavbar = ({ dark = false }) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [viewOrder, setViewOrder] = useState(false);

  const handleLink = (index) => {
    setActiveLink(index);
  };
  const closeCart = (e) => {
    setViewOrder(false);
  }

  const links = [{label:"home",route:'/'},{label:"menu",route:'/menu'},{label:"dashboard",route:'/dashboard'},{label:"about",route:'/'}];
  return (
    <>
    <nav className={`flex items-center justify-between px-6 ${dark ? 'bg-black' : 'bg-white'} py-3 shadow fixed z-30 top-2 right-2 left-2 rounded-2xl`}>
      <div className='text-green-500'>logo</div>
      <ul className={`sm:flex flex-1 justify-center items-center gap-9 hidden capitalize text-sm text-center font-semibold ${dark ? 'text-white' : 'text-black'} flex-wrap`}>
       {
        links.map((link,ind) => <Link label={link.label} route={link.route} key={link.label} indicate={activeLink === ind} handleOnclick={() => handleLink(ind)} />)
       }
      </ul>
      <div className='flex gap-8 items-center'>
        <span onClick={() => setViewOrder(prev => !prev)}>
        <p className={`text-xl relative ${viewOrder?'text-green-500':''}`}>
        <i class="fa-solid fa-utensils"></i>
        <span className='absolute bg-green-500 text-white rounded-full text-sm left-3 bottom-4 h-5 w-5 text-center font-semibold'>2</span>
        </p>
        </span>
        <span className='sm:inline hidden'><NavLink to={'/login'}><OutlineButton text={'login'} ><i className="fa-solid fa-right-to-bracket"></i></OutlineButton></NavLink></span>
      </div>
        {!open?<li className='sm:hidden flex mr-3' onClick={() => setOpen(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7">
          <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </li>:<li className='sm:hidden flex mr-3 font-bold' onClick={() => setOpen(prev => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
        </li>
         }
        <ul className={`sm:hidden ${open?'flex':'hidden'} flex-col flex-1 gap-4 absolute top-12 p-4 bg-white left-0 right-0 justify-center items-center flex-wrap top_down_anime`}>
        <span onClick={() => setOpen(false)}><Link label={'home'} route={'/'} /></span>
        <span onClick={() => setOpen(false)}><Link label={'menu'} route={'/menu'} /></span>
        {/* <span onClick={() => setOpen(false)}><Link label={'about'} route={'/about'} /></span> */}
        <span onClick={() => setOpen(false)}><Link label={'login'} route={'/login'} /></span>
        <span onClick={() => setOpen(false)}><Link label={'dashboard'} route={'/dashboard'} /></span>
        <span onClick={() => setOpen(false)}>
        <NavLink to={'/checkout'}>
        <p className='text-xl capitalize text-center font-semibold '>
        <i class="fa-solid fa-utensils"></i>
        </p>
        </NavLink>
        </span>
      </ul>
    {viewOrder && 
    <div className='absolute top-16 left-0 right-0 mt-1 z-10'>
    <Checkout closeCart={closeCart} />
    </div>}
    </nav>
         </>
  )
}

export default CenteredNavbar