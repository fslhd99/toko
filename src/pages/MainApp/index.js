import React from 'react'
import { Route, Routes } from 'react-router'
import {Navigasi } from '../../component'
import Project from '../Project'
import Merchant from '../Merchant'
import User from '../User'
import Home from '../Home'
import Tabel from '../Tabel'

const MainApp = () => {
  return (
    <div>
        <Navigasi></Navigasi>
        <Routes>
            <Route path='/Project' element={<Project/>} />
            <Route path='/Tabel' element={<Tabel/>} />
            <Route path='/Merchant' element={<Merchant/>} />
            <Route path='/' element={<User/>} />
        </Routes>
    </div>
  )
}

export default MainApp