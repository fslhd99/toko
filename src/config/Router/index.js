import React from 'react'
import {BrowserRouter as Routerr, Routes , Route, useNavigate} from 'react-router-dom';
import {Home, Login, MainApp, Register } from '../../pages';
import Logout from '../../pages/Logout';



const Router = () => {
  return (
    <div>
        <Routerr>
            <Routes>
              
                <Route path="/Logout"  element={<Logout/>} />
                <Route path="/Login"  element={<Login/>} />
                <Route path="/Register" exact element={<Register/>} />
                <Route path="/*" exact element={<MainApp/>} />
            </Routes>
        </Routerr>
    </div>
  )
}

export default Router ;