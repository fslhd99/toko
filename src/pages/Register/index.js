import React from 'react'
import { bg1 } from '../../assets';
import { Button,Input } from '../../component';
import { Link } from 'react-router-dom'
import './Register.css' ;
const Register = () => {
  return (
    <div className='main-page'>
        <div className='left'>
          <img src={bg1} className='bg-images'></img>
        </div>
        <div className='right'>
          <p className='title'>BUAT AKUN</p>
        <Input label="Username" placeholder="Username" ></Input>
        <Input label="Password" placeholder="Password" ></Input>
        <Input label="Email" placeholder="Email" ></Input>
        <Button title="MASUK"></Button><br></br>
        <Link to='/Login'><center>Kembali Ke Login</center></Link>
      
        </div>   
    </div>
  )
}

export default Register ;