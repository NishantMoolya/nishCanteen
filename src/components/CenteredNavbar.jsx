import React, { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import OutlineButton from './ui/OutlineButton'
import Checkout from '../pages/Checkout'
import { useDispatch, useSelector } from 'react-redux'
import Button from './ui/Button'
import { userLogout } from '../redux/api/userApi'
import { getRoleBasedLinks } from '../helpers/routeHelper'
import { clearCart } from '../redux/reducers/dishReducer'
import { showToast } from '../redux/reducers/toastReducer'
import { AnimatePresence, motion } from 'framer-motion'
import { cart, menu, mobileMenu } from '../animations/navbarAnim'

const Link = ({ label, route,indicate,handleClick=() => {} }) => {
  return(<li className='hover:text-slate-500 relative capitalize text-sm text-center font-semibold' onClick={handleClick}><NavLink to={route} className={'navbar'}>{label}</NavLink>
  {indicate && <span className="block w-full h-[2px] absolute bg-green-500 mt-[2px] rounded-full animate-slide-in"></span>}</li>)
}
const CenteredNavbar = () => {
  const [open, setOpen] = useState(false);
  const [viewOrder, setViewOrder] = useState(false);

  const auth = useSelector(state => state.user.auth);
  const role = useSelector(state => state.user.role);
  const dispatch = useDispatch();
  const location = useLocation();

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(getRoleBasedLinks(role));
  },[role]);

  const isLinkActive = (link) => {
    return link.split('/')[1] === location.pathname.split('/')[1];
  }

  const closeCart = (e) => {
    setViewOrder(false);
  }

  const dish = useSelector(state => state.dish);
  const dishCount = useMemo(() => dish.reduce((total, item) => total + item.quantity, 0),[dish]);

  return (
    <>
    <motion.nav className={`flex items-center sm:justify-between px-6 bg-white py-3 shadow fixed z-30 top-2 right-2 left-2 rounded-2xl`} variants={menu} initial='start' animate='end'>
      <div className='text-green-500 mr-auto sm:mr-0'><NavLink to={'/'}>logo</NavLink></div>

      <ul className={`sm:flex flex-1 justify-center items-center gap-9 hidden capitalize text-sm text-center font-semibold text-black flex-wrap`}>
       {
        links.filter(link => {
          if(!auth && (['/profile','/coins'].includes(link.route))) return null
          else return link
        }).map((link) => <Link label={link.label} route={link.route} key={link.label} indicate={isLinkActive(link.route)} />)
       }
      </ul>

      <div className='flex gap-8 items-center'>
        {auth && <span onClick={() => {setViewOrder(prev => !prev);setOpen(false)}}>
        <p className={`text-xl relative ${viewOrder?'text-green-500':''}`}>
        <i className="fa-solid fa-utensils"></i>
        {(dish.length !== 0) && <span className='absolute bg-green-500 text-white rounded-full text-sm left-3 bottom-4 h-5 w-5 text-center font-semibold'>{dishCount}</span>}
        </p>
        </span>}
        <span className='sm:inline hidden'>{!auth?<NavLink to={'/login'}><OutlineButton text={'login'} ><i className="fa-solid fa-right-to-bracket"></i></OutlineButton></NavLink>:<OutlineButton text={'logout'} handleClick={() => {dispatch(clearCart());dispatch(userLogout());dispatch(showToast({ message:'User logged out',type:'success'}));}} color={true}><i className="fa-solid fa-right-from-bracket"></i></OutlineButton>}</span>
      </div>
        {!open?<span className='text-xl ml-4 sm:hidden' onClick={() => {setOpen(p=>!p);setViewOrder(false)}}><i className="fa-solid fa-bars"></i></span>:<span className='text-xl ml-4 sm:hidden' onClick={() => {setOpen(p=>!p);setViewOrder(false)}}><i className="fa-solid fa-xmark"></i></span>}
        <ul className={`sm:hidden ${open?'flex':'hidden'} flex-col flex-1 gap-4 absolute top-14 p-4 bg-white left-0 right-0 justify-center items-center flex-wrap top_down_anime rounded-xl shadow`}>
        {
        links.filter(link => {
          if(!auth && (['/profile','/coins'].includes(link.route))) return null
          else return link
        }).map((link) => <Link label={link.label} route={link.route} key={link.label} indicate={isLinkActive(link.route)} handleClick={() => setOpen(false)} />)
       }
       <span onClick={() => setOpen(false)}>{!auth?<NavLink to={'/login'}><OutlineButton text={'login'} ><i className="fa-solid fa-right-to-bracket"></i></OutlineButton></NavLink>:<OutlineButton text={'logout'} handleClick={() => {dispatch(clearCart());dispatch(userLogout());dispatch(showToast({ message:'User logged out',type:'success'}));}} color={true}><i className="fa-solid fa-right-from-bracket"></i></OutlineButton>}</span>
      </ul>
      <AnimatePresence>
    {(auth && viewOrder) && 
    <motion.div className='absolute top-16 left-0 right-0 mt-1 z-10' variants={cart} initial='hidden' animate='visible' exit={'hidden'}>
    <Checkout closeCart={closeCart} />
    </motion.div>} 
      </AnimatePresence>
    </motion.nav>
         </>
  )
}

export default CenteredNavbar