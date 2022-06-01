import React from 'react'
import './Input.css';

const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
      
        <input className='input'{...rest}></input>
    </div> 
  )
}

export default Input