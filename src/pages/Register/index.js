import React, { useState } from 'react'
import { bg1 } from '../../assets';
import { Button,Input } from '../../component';
import { Link, useNavigate } from 'react-router-dom'
import './Register.css' ;
import axios from 'axios';

const Register = () => {

  // variable dari API, Onchange isi 0 
  const [username, setUsername] = useState('')
  const [full_name, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const API = process.env.REACT_APP_ACCESS_KEY

  const btnRegister = () => {

    if(full_name === ''){
      alert("Nama tidak boleh kosong")
    }else if(username === ''){
      alert("Username tidak boleh kosong")
    }else if(email === ''){
      alert("Email tidak boleh kosong")
    }else if(password === ''){
      alert("Password tidak boleh kosong")
    }else{

      // data body / api
      const datas = {
        full_name,
        username,
        email,
        password,
        merchant_id: null,
        balance: 0
      }
      const API = process.env.REACT_APP_ACCESS_KEY
      // axios send post
      axios({
        method: 'POST',
        url: API + '/users/register',
        data: datas
      })
      .then(obj => {

        const res = obj.data

        if(res.message === 'Data Saved Successfully'){
          // alert if success[
          alert('Berhasil mendaftar')

          // redirect to login with navigate
          navigate("/Login")
        }else{

          // error dari api
          alert(res.error.username)
        } 

      })
      .catch(error => {

        // error ini dari axios
        console.log(error)
      })
    }
  }

  return (
    <div className='main-page'>
        <div className='left'>
          <img src={bg1} className='bg-images'></img>
        </div>
        <div className='right'>
          <p className='title'>BUAT AKUN </p>
            <Input label="Nama" placeholder="Nama" onChange={(e) => setNama(e.target.value)}></Input>
            <Input label="Username" placeholder="Username" onChange={(target) => setUsername(target.target.value)}></Input>
            <Input label="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
            <Input label="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
            <Button onClick={ () => btnRegister() } title="MASUK"></Button><br></br>
            <Link to='/Login'><center>Kembali Ke Login</center></Link>
        </div>   
    </div>
  )
}

export default Register ;
