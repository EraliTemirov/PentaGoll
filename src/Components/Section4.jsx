import React, { useEffect, useState } from 'react';
import "../index.css";
import rasm from "../Imgs/image 5.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Section4 = () => {
  const [news, setNews] = useState([])
  const [selectedProductId, setSelectedProductId] = useState("644dbf62a53d145b97af74b5");
  const [games, setGame] = useState([])

  useEffect(() => {
    axios.get('http://18.181.217.30:8080/api/v1/news')
    .then(res => {
      console.log(res);
      setNews(res.data.data)
    })
    .catch((error) => {
      console.log(error.message);
    })
  }, [])

  function handleBoxClick(event) {  
    console.log(event.target.value);  
    console.log(`salom`);
    const selectedId = '644dbf62a53d145b97af74b5'
    // const selectedId = String(event.target.value)
  //   setSelectedProductId(selectedId);
  //   console.log(selectedId);
  //   axios.get(`http://18.181.217.30:8080/api/v1/teams/${selectedId}`)
  //   .then(res => {
  //     const newArray = res.data.data[0].scores
  //     console.log(newArray);
  //     setGame(newArray)
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //  });

  }
  
  return (
    <div className='container1 '>
       <h4 className='section4 ps-5 pt-2 pb-2'>So'ngi yangiliklar</h4>
       <div className='d-flex flex-wrap'>
        {news.map((item) => (
          <>
          <div className='col-3' onClick={handleBoxClick} key={item._id} value={item._id}>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
              <p className='img-box'>
                <img src={item.image} alt="rasm" className='w-100' />
              </p>
            </Link>
            <Link to='/about' className='fs-5'>{item.title.substring(0, 30)}...</Link>
            <p>
              <Link to='/about'>{item.description.substring(0, 60)}... </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div>
       </>
        ))}
        <button className='btn btn-info form-control mt-5 m-3'>Barchasini ko'rish</button>
    </div>
    </div>
  )
}

export default Section4
