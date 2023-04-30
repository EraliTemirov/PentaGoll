import React, { useEffect, useState } from 'react';
import "../index.css";
import rasm from "../Imgs/image 5 (1).png";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Section5 = () => {
  const [news, setNews] = useState([])
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
  return (
    <div className='container1 '>
       <h3 className='section4'>So'ngi yangiliklar</h3>
       <div className='d-flex flex-wrap'>
        {
          news.map((item) => (
        <div className='col-3'>
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
          ))
        }
        <div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div><div className='col-3'>
          <div className="home-box text-center p-3 m-2 color">
            <Link to='/about'>
            <img src={rasm} alt="rasm" className='w-100' /></Link>
            <Link to='/about' className='fs-5'>Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi</Link>
            <p>
              <Link to='/about'>Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi </Link>
            </p>
            <span>12.05.2021  12:54</span>
          </div>
        </div>
        <button className='btn btn-info form-control mt-5 m-3'>Barchasini ko'rish</button>
       </div>
    </div>
  )
}

export default Section5;
