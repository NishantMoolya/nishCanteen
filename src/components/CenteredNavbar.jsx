import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ label, route }) => {
  return(<li className='hover:text-slate-500 capitalize'><NavLink to={route}>{label}</NavLink></li>)
}
const CenteredNavbar = ({ dark = false }) => {
  return (
    <nav className={`flex items-center ${dark ? 'bg-black' : 'bg-white'} py-3 shadow fixed top-0 right-0 left-0`}>
      <div className='text-green-500 self-start ml-4'>logo</div>
      <ul className={`flex flex-1 justify-center items-center gap-9 capitalize text-sm text-center font-semibold ${dark ? 'text-white' : 'text-black'} flex-wrap`}>
        <Link label={'home'} route={'/'} />
        <Link label={'menu'} route={'/menu'} />
        <Link label={'about'} route={'/about'} />
        <Link label={'login'} route={'/login'} />
        <Link label={'dashboard'} route={'/dashboard'} />
        {/* <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </li> */}
      </ul>
    </nav>
  )
}

export default CenteredNavbar