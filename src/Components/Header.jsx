import React from 'react';
import logo from '../Imgs/logo.svg';
import chiroq from '../Imgs/chiroq.svg';


const Header = () => {
  return (
    <div className='container'>
      <img src={logo} alt="logo" />
      <img src={chiroq} alt="button" />
    </div>
  )
}

export default Header
