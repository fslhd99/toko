import React from 'react'
import {BrowserRouter as Routerr, Routes , Route} from 'react-router-dom';
import {Home, Login, MainApp, Register } from '../../pages';
const Router = () => {
  return (
    <div>
        <Routerr>
            <Routes>
                <Route path="/Login"  element={<Login/>} />
                <Route path="/Register" exact element={<Register/>} />
                <Route path="/Home" exact element={<Home/>} />
                <Route path="/*" exact element={<MainApp/>} />
            </Routes>
        </Routerr>
    </div>
  )
}

export default Router ;