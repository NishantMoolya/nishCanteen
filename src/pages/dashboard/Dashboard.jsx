import React from 'react'
import avatar from '../../assets/person1.jpg'
import { NavLink, Outlet } from 'react-router-dom'

const List = ({ label,children,route }) => {
    return( <NavLink to={route} className={'dashboard'}>
    <li className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-50 hover:text-green-500'>
      {children}
      <p className='capitalize'>{label}</p>
  </li>
    </NavLink>)
  }

const Dashboard = () => {
  return (
    <div className='flex'>
       <div className='flex-[1] hidden md:block p-2 h-[90vh]'>
            <ul className='bg-white flex border rounded flex-col gap-1 p-3 font-semibold text-sm text-slate-900 h-full'>
            <div className='mt-auto flex items-center gap-1'>
              <img src={avatar} alt="user" className='w-16 h-16' />
              <p className='font-semibold'>Nishant Moolya</p>
            </div>
            <List label={'overview'} route={'/dashboard/overview'} />
            <hr />
            <List label={'performance'} route={'/dashboard/performance'} ><i class="fa-solid fa-chart-simple"></i></List>
            <hr />
            <List label={'products'} route={'/dashboard/products'} />
            <hr />
            <List label={'menu card'} route={'/dashboard/menu'} ><i class="fa-solid fa-book"></i></List>
            <hr />
            <List label={'staff'} route={'/dashboard/staff'} >
            <i class="fa-solid fa-person"></i>
            </List>
            <hr />
            <List label={'setting'} route={'/dashboard/setting'} ><i class="fa-solid fa-gear"></i></List>
            <hr />
            <List label={'report'} route={'/dashboard/report'} ><i class="fa-solid fa-file"></i></List>
            <hr />
              <li className='flex-1 flex'>
                    <div className='self-end flex gap-2 py-2 px-3 rounded-md bg-red-50 text-red-500 ml-auto items-center w-full justify-center hover:bg-red-500 hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        <p>Logout</p>
                    </div>
                </li>
            </ul>
            </div>
        <div className='flex-[3] mt-2 p-2 flex gap-2 flex-col h-screen overflow-scroll'>
          <Outlet />
        </div>
    </div>
  )
}

export default Dashboard