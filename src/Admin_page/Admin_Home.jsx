import React from 'react'
import Admin_Home1 from './Component_admin/Admin_Home1'
import Footer from '../Components/Footer'
import Admin_Header from './Admin_Header'

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
