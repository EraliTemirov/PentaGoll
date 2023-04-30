import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Header from '../Admin_Header';
import Footer from '../../Components/Footer';

const Admin_Home_Jadval = () => {
  const [tables, setTable] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [games, setGame] = useState([])

  function handleSelectChange(event) {    
    const selectedId = String(event.target.value);
    setSelectedProductId(selectedId);
    axios.get(`http://18.181.217.30:8080/api/v1/ligues/list/${selectedId}?starttime=2022&endtime=2023`)
    .then(res => {
      const newArray = res.data.data[0].teams
      console.log(newArray);
      setGame(newArray)
    })
    .catch((error) => {
      console.log(error.message);
   });

  }
  
  useEffect(() => {
      axios.get('http://18.181.217.30:8080/api/v1/ligues/list')
      .then(res => {
        console.log(res);
        setTable(res.data.data)
      })
      .catch((error) => {
        console.log(error.message);
     });

 }, []);
  

  return (
    <div>
      <div className='Header'>
      <Admin_Header/>
      </div>
      <form className='container mt-5'>
      <h2>Jadval </h2>
      <select name="name" id="name" className='form-control fs-3' onChange={handleSelectChange}>
      {tables.map((post) => (
        <option key={post._id} value={post._id} className='fs-5 form-control' >{post.name}</option>
      ))}
      </select>

      <select name="jamoa" id="jamoa" className='form-control mt-3'>
        {games.map((list, _id)=>(

        <option value="jamoa">{list.name}</option>
        ))}
      </select>
        <div className='d-flex mt-2'>
          <input type="number"  className='form-control'/>
          <input type="number" className='form-control' />
        </div>
        
        <select name="jamoa" id="jamoa" className='form-control mt-4'>
        {games.map((list, _id)=>(

        <option value="jamoa">{list.name}</option>
        ))}
      </select>

      <button className='btn btn-success w-25 mt-4'>Yuklash</button>
      </form>
     <div className='Header text-start mt-5'>
     <Footer/>
     </div>
    </div>
  )
}

export default Admin_Home_Jadval;
