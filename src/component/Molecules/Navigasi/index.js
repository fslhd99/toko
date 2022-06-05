import React from 'react'
import './Navigasi.css'
import { Link } from 'react-router-dom'
import  Logo  from '../../../assets/Images/Logo.png';

const Navigasi = () => {

  
  return (
    <div className='navigasi'>
        <div>
        <img src={Logo} className='logo-app'></img>
            {/* <p className='logo-app'>TOKOKO</p> */}
        </div>
     <div className='nav-right'>
        {/* <Link className='menu-item' to='/'>HOME</Link> */}
        {/* <Link className='menu-item' to='/'>HOME</Link> */}
        <Link className='menu-item' to='/User'>USER</Link>
        <Link className='menu-item' to='/Merchant'>MERCHANT</Link>
        <Link className='menu-item' to='/Project'>PROJECT</Link>
        <Link className='menu-item' to='/Logout'>LOGOUT</Link>
    </div>
        
    </div>
  ) 
}

export default Navigasi ;