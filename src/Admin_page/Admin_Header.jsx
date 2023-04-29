import React from 'react';
import logo from '../Imgs/logo.svg';
import chiroq from '../Imgs/chiroq.svg';
import '../Sass/header.scss'

const Admin_Header = () => {
  return (
    <div className='container1 d-flex  justify-content-between p-3 align-items-center'>
      <button className='darkAndLight'>
          <img src={logo} alt="logo" />
      </button>
      <div className='w-50 d-flex justify-content-between'>
        <span className='fs-5'>Yangiliklar</span>
        <span className='fs-5'>Match qo'shish</span>
        <span className='fs-5'>rasm qo'shish</span>
      </div>
      <img src={chiroq} alt="button" />
    </div>
  )
}

export default Admin_Header;
