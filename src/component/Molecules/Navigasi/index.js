import React from 'react'
import './Navigasi.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../../assets';

const Navigasi = () => {
  return (
    <div className='navigasi'>
        <div className='logo-app'>
        {/* <img src={Logo} className='logo-app'></img> */}
            <p className='logo-app'>TOKOKO</p>
        </div>
     <div className='nav-right'>
        {/* <Link className='menu-item' to='/'>HOME</Link> */}
        <Link className='menu-item' to='/'>USER</Link>
        <Link className='menu-item' to='/Merchant'>MERCHANT</Link>
        <Link className='menu-item' to='/Project'>PROJECT</Link>
        <Link className='menu-item' to='/Login'>LOGOUT</Link>
    </div>
        
    </div>
  )
}

export default Navigasi ;