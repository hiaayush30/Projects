import React, { useState } from 'react'
import logo from "../assets/Images/logo.png";
import { HiMagnifyingGlass, HiHome, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import profileImg from '../assets/Images/profile.jpeg'
import { HiDotsVertical } from 'react-icons/hi';
const Navbar = () => {
  const [dropdown,setDropdown]=useState(false);
  const menu = [{
    name: 'HOME',
    icon: HiHome
  },
  {
    name: 'SEARCH',
    icon: HiMagnifyingGlass
  },
  {
    name: 'ORIGINALS',
    icon: HiStar
  },
  {
    name: 'MOVIES',
    icon: HiPlayCircle
  },
  {
    name: 'SERIES',
    icon: HiTv
  }]
  return (
    <div className='flex justify-between py-2 px-3'>
      <div className='flex text-white items-center py-2 gap-10'>
        <img src={logo} alt='logo' className='h-12 max-sm:w-36 w-40'></img>
        <div className='hidden md:flex max-sm:gap-2 flex-wrap gap-8'>
          {menu.map(item => {
            return <HeaderItem name={item.name} Icon={item.icon} />
          })}
        </div>
        {/* menu items for smaller screen */}
        <div className='md:hidden flex max-sm:gap-2 flex-wrap gap-8'>
          {menu.map((item, index) => {
            if (index < 3) return <HeaderItem Icon={item.icon} />
          })}
        </div>
        <div className='md:hidden' onClick={()=>{setDropdown(!dropdown)}}>
           <HeaderItem Icon={HiDotsVertical} />
          {dropdown && <div className='absolute bg-[#121212] border-1 border-gray-700 p-3'>
          {menu.map((item, index) => {
            if (index >= 3) return <HeaderItem name={item.name} Icon={item.icon} />
          })}
          </div>}
        </div>
      </div>
      <img src={profileImg} className='w-14 h-14 rounded-full'></img>
    </div>
  )
}

export default Navbar
