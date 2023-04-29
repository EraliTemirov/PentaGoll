import React, { useEffect, useState } from 'react';
import "../Sass/Section1.scss";
import axios from 'axios';
const Section1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get('https://azizjon003.jprq.live/api/v1/ligues/list')
      .then(res => {
        console.log(res);
        setUsers(res.data.data)
      })
      .catch((error) => {
        console.log(error.message);
     });
 }, []);

  return (
    <div className='container1'>

      <div className='mt-5 d-flex section1_1 p-2 gap-2'>

       
        {users.map((post) => (
            <h1>{post.name}</h1>
          ))}
        




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
