import React, { useState } from 'react'
import { bg1 } from '../../assets';
import { Button,Input } from '../../component';
import { Link, useNavigate } from 'react-router-dom'
import './Login.css' ;
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


const Login = () => {
  const API = process.env.REACT_APP_ACCESS_KEY
  const [x, setX] = useState('')
  const [z, setZ] = useState('')
  const navigate = useNavigate()

  // format penggunaan state
  // [value, fungsi buat rubah value (dari input)] = nilai awal

 

  const btnLogin = () => {

    const t = {
      usernameOrEmail: x,
      password: z
    }

    // axios send post
    axios({
      method: 'POST',
      url: API + '/users/login',
      data: t
    })
    .then(obj => {
      //obj bebas di kasih value nama apa aja. data di ambil dari Axios data
      console.log(obj)
      const a = obj.data
        //status di dapatkan dari hasil dari API
      if(a.status == 'true'){
        
        // jika login berhasil => ambil token
        const r = 'Bearer ' + a.response_data.token

        // save session in localstorage
        reactLocalStorage.set('token', r);

        navigate("/MainApp")
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className='main-page'>
        <div className='left'>
          <img src={bg1} className='bg-images'></img>
        </div>
        <div className='right'>
          <p className='title'>LOGIN</p>
          
          <Input label="Username" placeholder="Username" onChange={ (e) => setX(e.target.value) }></Input>
          <Input label="Password" placeholder="Password" onChange={ (e) => setZ(e.target.value) }></Input>
          <Button onClick={ () => btnLogin() } title="MASUK"></Button><br></br>
          <Link to='/Register'><center>Belum Punya Akun ? Silakan Daftar</center></Link>
            
        </div>   
    </div>
  )
}

export default Login ;