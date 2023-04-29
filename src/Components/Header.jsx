import React from 'react';
import logo from '../Imgs/logo.svg';
import chiroq from '../Imgs/chiroq.svg';
import '../Sass/header.scss'


const Header = () => {
  const DarkLight = () => {
    document.body.classList.toggle('darklight')
  }
  return (
    <div className='container1 d-flex  justify-content-between p-3'>
      <img src={logo} alt="logo" />
      <button className='darkAndLight' onClick={DarkLight}>
      <img src={chiroq} alt="button" />
      </button>
    </div>
  )
}

export default Header
