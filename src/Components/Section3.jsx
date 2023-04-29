import React from 'react'
import Sectionmini1 from './Component_Secton/Sectionmini1'
import Sectionmini2 from './Component_Secton/Sectionmini2'

const Section3 = () => {
  return (
    <div className='d-flex container mt-5'>
      <div className='w-75'>
       <Sectionmini1/>
      </div>
      <div className='w-25'>
       <Sectionmini2/>
      </div>
    </div>
  )
}

export default Section3
