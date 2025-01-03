import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.webp'
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { Button } from '@mui/material'
import SearchBox from './SearchBox';
import { FiSun } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
   <>
   <header className='d-flex align-items-center'>
    <div className='container-fluid w-100'>
      <div className='row d-flex align-item-center w-100 '>
        {/* logo */}
        <div className='col-sm-2 part1'>
          <Link to={'/'}className='d-flex align-items-center logo'>
          <img src={logo} alt="" className='' />
          <span className='ml-2 '>HOTASH</span>
          </Link>   
        </div>

        <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
         <Button className='rounded-circle mr-3'><MdMenuOpen /></Button>
         <SearchBox/>
        </div>

        <div className=' col-sm-7 d-flex align-items-center justify-content-end part3'>
        <Button className='rounded-circle mr-3'><FiSun /></Button>
        
        <Button className='rounded-circle mr-3'><BsCart3 /></Button>
        <Button className='rounded-circle mr-3'>< IoMailOutline  /></Button>
        <Button className='rounded-circle mr-3'><IoMdNotificationsOutline /></Button>

        <div className='myAcc d-flex align-items-center'>
          <div className='userImg'>
            <span className='rounded-circle'>
              <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
            </span>
          </div>
        </div>
        </div>
        </div> 
    </div>
   </header>
   </>
  )
}

export default Header
