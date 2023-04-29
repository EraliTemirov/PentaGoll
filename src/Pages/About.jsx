import React from 'react';
import Header from '../Components/Header';
import Sectionabout from '../Components/Component_About/Sectionabout';
import Section4 from '../Components/Section4';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div>
        <div className='Header'>
      <Header/>
      </div>
      <Sectionabout/>
      <Section4/>

      <div className='Header'>
      <Footer/>
      </div>
      
    </div>
  )
}

export default About
