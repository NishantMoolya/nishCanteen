import React from 'react'
import Button from '../components/ui/Button'
import OutlineButton from '../components/ui/OutlineButton'
import AboutImg from '../assets/about-img.jpg'
import { NavLink } from 'react-router-dom'
import Favorites from '../components/Favourites'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
    <div className='flex flex-col gap-6 items-center h-[90vh] justify-center back_img bg-center bg-cover flex-wrap'>
      <p className='text-5xl font-bold capitalize font-sans break-words text-center'><span className='text-green-500'>SCEM</span> foodcourt</p>
      <p className='text-2xl font-semibold capitalize break-words text-center'>Taste the best</p>
      <div className='flex items-center gap-4 flex-wrap'>
      <Button text={'explore menu'} end={false} />
      <OutlineButton text={'signup'} end={false} />
      </div>
    </div>
    <div className='flex sm:flex-row flex-col justify-evenly py-4 px-6 items-center'>
                        <img src={AboutImg} alt="about img" className='sm:w-2/5 w-full h-[500px] rounded shadow-sm' />
                    <div className='flex-1 max-w-96 flex flex-col items-center gap-4'>
                        <h2 className='font-semibold text-4xl text-center'>About Us</h2>
                        <p className='font-semibold text-base text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate aut dolore ullam quasi numquam quod molestias cum officiis perspiciatis?</p>
                        <p className='font-semibold text-sm text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni animi tenetur eaque vel accusamus placeat quaerat ad. Similique quaerat qui doloribus assumenda deserunt tenetur quas suscipit officiis quod sequi?</p>
                        <NavLink to="/">
                            <Button text={'More About Us'} />
                        </NavLink>
                </div>
            </div>
            <div className='h-full'>
              <Favorites />
            </div>
            <div className='h-full'>
              <Contact />
            </div>
    </div>
  )
}

export default Home