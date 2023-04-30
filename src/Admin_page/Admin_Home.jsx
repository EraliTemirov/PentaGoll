import React from 'react'
import Admin_Home1 from './Component_admin/Admin_Home_Yangilik'
import Footer from '../Components/Footer'
import Admin_Header from './Admin_Header'
import Admi_Home2 from './Component_admin/Admi_Home_Jadval';
import Admin_Home3 from './Component_admin/Admin_Home_Mavsum';

const Admin_Home = () => {
  return (
    <div>
      <div className='Header'>
        <Admin_Header/>
      </div>
      <Admin_Home1/>
      <div className='Header'>
      <Footer/>
      </div>
    </div>
  )
}

export default Admin_Home
