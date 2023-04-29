import React from 'react';
import Header from '../Components/Header';
import "../index.css"
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div >
      <div className='Header'>
      <Header/>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <div className='Header'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
