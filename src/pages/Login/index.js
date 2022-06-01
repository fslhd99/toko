import React from 'react'
import { bg1 } from '../../assets';
import { Button,Input } from '../../component';
import { Link } from 'react-router-dom'
import './Login.css' ;
const Login = () => {
  return (
    <div className='main-page'>
        <div className='left'>
          <img src={bg1} className='bg-images'></img>
        </div>
        <div className='right'>
          <p className='title'>LOGIN</p>
        <Input label="Username" placeholder="Username" ></Input>
        <Input label="Password" placeholder="Password" ></Input>
        <Button onclick={"./MainApp"} title="MASUK"></Button><br></br>
        <Link to='/Register'><center>Belum Punya Akun ? Silakan Daftar</center></Link>
      
        </div>   
    </div>
  )
}

export default Login ;