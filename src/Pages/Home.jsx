import React from 'react';
import Header from '../Components/Header';
import "../index.css"
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';

const Home = () => {
  return (
    <div>
      <div className='Header'>
      <Header/>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Home
