import React from 'react'
import './Link.css' ;
const Link = ({title,onclick}) => {
  return (
    <div className='linksize'>
        <p onclick={onclick}>{title}</p>
    </div>
  )
}

export default Link ;