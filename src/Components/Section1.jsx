import React, { useEffect, useState } from 'react';
import "../Sass/Section1.scss";

const Section1 = () => {

  const [data, Setdata] = useState([]);


  // useEffect(() => {
  //  fetch(`https://azizjon003.jprq.live/api/v1/ligues/list`)
  //  .then((res) => res.json())
  //  .then((json) => Setdata(json));
  // }, []);
  // console.log(data);

  return (
    <div className='container1'>
      <div className='mt-5 d-flex section1_1 p-2 gap-2'>
        {/* {data?.map((data, index)=>(

          <button className='btn btn-success' key={index}>{data?.status}</button>
          )   )} */}
        




        <button className='btn btn-light'>@ Italiya.Seriya A</button>
        <button  className='btn btn-light'>@ Italiya.Seriya A</button>
        <button  className='btn btn-light'>@ Italiya.Seriya A</button>
        <button  className='btn btn-light'>@ Italiya.Seriya A</button>
      </div>
      <div className='section1_1 d-flex justify-content-between mt-2 p-2 text-center flex-wrap'>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
      </div>
      <div className='section1_1 d-flex justify-content-between mt-2 p-2 text-center flex-wrap'>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
       <div>
       <p className='d-block btn btn-light '>Barcelona 3:0 Liverpul</p>
        <span>11.11.2021 23:59</span>
       </div>
      </div>
    </div>
  )
}

export default Section1
