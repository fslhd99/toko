import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import {Navigasi } from '../../component'
import Project from '../Project'
import Merchant from '../Merchant'
import User from '../User'
import Tabel from '../Tabel'
import Home from '../Home'
import { useNavigate } from 'react-router-dom'
import {reactLocalStorage as session} from 'reactjs-localstorage';



const MainApp = () => {
  
  //Untuk membuat Session wajib
  const navigate = useNavigate()

  useEffect(() => {
    
    // ngecek token / session if exist
    if(session.get('token') == null){

      // redirect to login
      navigate('/Login')
    }

  })

  return (
    <div>
        <Navigasi></Navigasi>
        <Routes>
            <Route path='/Project' element={<Project/>} />
            <Route path='/Tabel' element={<Tabel/>} />
            <Route path='/Merchant' element={<Merchant/>} />
            <Route path='/User' element={<User/>} />
            <Route path='/MainApp' element={<User/>} />
        </Routes>

    </div>
  )
}

export default MainApp