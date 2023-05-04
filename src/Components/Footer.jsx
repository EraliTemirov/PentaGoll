import React from 'react';

import logo from '../Imgs/logo.svg';
import twetter from '../Imgs/Twitter.svg';
import youtube from '../Imgs/YouTube.png';
import vkontact from '../Imgs/Vkontakte (VK).png';
import scaype from '../Imgs/Skype.png';
import instagram from '../Imgs/Instagram.png';
import facebook from '../Imgs/Facebook.png';
import telegram from '../Imgs/Telegram.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container1'>
      <div className='d-flex p-5 justify-content-between footer' >
      <Link to='/'>
        <img src={logo} alt="logo"/>
      </Link>
      <div className='w-50 d-flex justify-content-evenly'>
        <div>
        <span className='d-block fs-5'>Main</span>
        <span className='d-block mt-3 fs-5'>Mach Center</span>
        <span className='d-block mt-3 fs-5'>Footbal</span>
        <span className='d-block mt-3  fs-5'>Tennis</span>
        <span className='d-block mt-3 fs-5'>Cybersport</span>
        </div>
        <div>
        <span className='d-block  fs-5'>Main</span>
        <span className='d-block mt-3 fs-5'>Mach Center</span>
        <span className='d-block mt-3 fs-5'>Footbal</span>
        <span className='d-block mt-3 fs-5'>Tennis</span>
        <span className='d-block mt-3 fs-5'>Cybersport</span>
        </div>
        <div>
        <span className='d-block  fs-5'>Main</span>
        <span className='d-block mt-3 fs-5'>Mach Center</span>
        <span className='d-block mt-3 fs-5'>Footbal</span>
        <span className='d-block mt-3 fs-5'>Tennis</span>
        <span className='d-block mt-3 fs-5'>Cybersport</span>
        </div>
      </div>
      <div className='w-25 d-flex flex-wrap'>
       <div className="col-3">
            <img src={twetter} alt="logo" />
       </div>
       <div className="col-3">
            <img src={youtube} alt="logo" />
       </div>
       <div className="col-3">
            <img src={vkontact} alt="logo" />
       </div>
       <div className="col-3">
            <img src={scaype} alt="logo" />
       </div>
       <div className="col-3">
            <img src={instagram} alt="logo" />
       </div>
       <div className="col-3">
            <img src={facebook} alt="logo" />
       </div>
       <div className="col-3">
           <a href="#"> <img src={telegram} alt="logo" /></a>
       </div>
      </div>
      </div>
      <hr className=' p-1 m-2 form-control fs-1 bg-light'/>
      <br />
    </div>
  )
}

export default Footer
