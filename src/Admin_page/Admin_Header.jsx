import React from 'react';
import logo from '../Imgs/logo.svg';
import chiroq from '../Imgs/chiroq.svg';
import { Link } from 'react-router-dom';


const Admin_Header = () => {
  return (
    <div className='container1 d-flex  justify-content-between p-3 align-items-center'>
      <button className='darkAndLight'>
          <img src={logo} alt="logo" />
      </button>
      <div className='w-50 d-flex justify-content-between'>
        
        <span className='fs-5'><Link to={"/admin"} >Yangiliklar</Link></span>
        <span className='fs-5'><Link to={"/adminmavsum"} >Match qo'shish</Link></span>
        <span className='fs-5'><Link to={"/adminjadval"} >Mavsum</Link></span>
      </div>
      <img src={chiroq} alt="button" />
    </div>
  )
}

export default Admin_Header;
