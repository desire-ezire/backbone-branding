import React from 'react';
import logo from '/src/assets/logo.png';

const Card = () => {
  return (
    <div  className='w-60'>
        <img src={logo} className='bg-black'/>
        <div className='flex justify-between'>
            <h3>tuff</h3>
            <p>PRODUCT</p>
        </div>
    </div>
  )
}

export default Card