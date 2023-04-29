import React from 'react';
import logo from '../Imgs/logo.svg';
import chiroq from '../Imgs/chiroq.svg';


const Admin_Header = () => {
  return (
    <div className='container1 d-flex  justify-content-between p-3'>
      <img src={logo} alt="logo" />
      <div>
        <span>Yangiliklar</span>
        <span></span>
      </div>
      <img src={chiroq} alt="button" />
    </div>
  )
}

export default Admin_Header;
