import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Header from '../Admin_Header';
import Footer from '../../Components/Footer';

const Admin_Home_Jadval = () => {
  const [tables, setTable] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [games, setGame] = useState([]);
  const [home, away] =useState([]);

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



 const [values, setValues] = useState({
  home: "",
  away: "",
  startTime: "",
  homeGoal:"",
  awayGoal:"",
  });



 async function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  try {
    let {
      data: { data, status },
    } = await axios.post(`http://18.181.217.30:8080/api/v1/matches`,
      values
    );

    
  } catch (error) {
    console.log(error);
  }
  
}

  


 function handelInputChange(e) {
  setValues((oldValues) => ({
    ...oldValues,
    [e.target.name]: e.target.value,
  }));
}


  return (
    <div>
      <div className='Header'>
      <Admin_Header/>
      </div>
      <form className='container mt-5' onSubmit={handleSubmit}>
      <h2>Jadval </h2>
      <select name="name" id="name" className='form-control fs-3' onChange={handleSelectChange} >
      {tables.map((post) => (
        <option key={post._id} value={post._id} className='fs-5 form-control' >{post.name}</option>
      ))}
      </select>

      <select name="jamoa" id="jamoa" className='form-control mt-3' onChange={e=>handle(e)}>
        {games.map((list)=>(

        <option value={list._id}  >{list.name}</option>
        ))}
      </select>
        <div className='d-flex mt-2'>
          <input type="number"  className='form-control' onChange={e=>handle(e)}/>
          <input type="number" className='form-control' onChange={e=>handle(e)} />
        </div>
        
        <select name="jamoa" id="jamoa" className='form-control mt-4' onChange={handleSubmit}>
        {games.map((list)=>(

        <option  value={values.away} >{list.name}</option>
        ))}
      </select>
         <input type="date" className='d-block mt-3 form-control'onChange={handleSubmit}/>
      <button className='btn btn-success w-25 mt-4'>Yuklash</button>
      </form>
     <div className='Header text-start mt-5'>
     <Footer/>
     </div>
    </div>
  )
}

export default Admin_Home_Jadval;
