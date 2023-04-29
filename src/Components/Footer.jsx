import React from 'react';
import logo from '../Imgs/logo.svg';
import twetter from '../Imgs/Twitter.svg';
import youtube from '../Imgs/YouTube.png';
import vkontact from '../Imgs/Vkontakte (VK).png';
import scaype from '../Imgs/Skype.png';
import instagram from '../Imgs/Instagram.png';
import facebook from '../Imgs/Facebook.png';
import telegram from '../Imgs/Telegram.png';

const Footer = () => {
  return (
    <div className='container'>
      <div className='d-flex p-5 justify-content-between' >
      <img src={logo} alt="logo"/>
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
      <div className='w-25 d-flex flex-wrap gap-4 '>
       <img src={twetter} alt="logo" />
       <img src={youtube} alt="logo" />
       <img src={vkontact} alt="logo" />
       <img src={scaype} alt="logo" />
       <img src={instagram} alt="logo" />
       <img src={facebook} alt="logo" />
       <img src={telegram} alt="logo" />
      </div>
      </div>
      
    </div>
  )
}

export default Footer
