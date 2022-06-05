import React, {useEffect} from 'react'
import { useNavigate } from 'react-router'
import { reactLocalStorage as session } from 'reactjs-localstorage'

const Logout = () => {

    const navigate = useNavigate()

    // destory session
    

  useEffect(() => {
    
    session.clear()
    
    navigate('/Login')

  })
  return (
    <div></div>
    
  )
}

export default Logout