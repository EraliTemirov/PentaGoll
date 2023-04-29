import React from 'react';
import '../../Sass/Section3.scss';
import bir from '../../Imgs/Rectangle 700.png';
import ikki from '../../Imgs/Rectangle 704.png';

const Sectionmini1 = () => {
  return (
    <div className='container '>
      <img src={bir} alt="rasm" className='w-100' />
      <div className='pt-3 d-flex  flex-wrap gap-1 justify-content-between'>
        <div className='w25'>
          <img src={ikki} alt="rasm"  className='w100' />
        </div>
        <div className='w25'>
          <img src={ikki} alt="rasm" className='w100' />
        </div>
        <div className='w25'>
          <img src={ikki} alt="rasm" className='w100' />
        </div>
        <div className='w25'>
          <img src={ikki} alt="rasm"  className='w100' />
        </div>
        <div className='w25'>
          <img src={ikki} alt="rasm" className='w100' />
        </div>
        <div className='w25'>
          <img src={ikki} alt="rasm" className='w100' />
        </div>
        
      </div>
    </div>
  )
}

export default Sectionmini1
