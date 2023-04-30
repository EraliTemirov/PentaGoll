import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Header from '../Admin_Header';
import Footer from '../../Components/Footer';

const Admin_Home_Jadval = () => {
  const [tables, setTable] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [games, setGame] = useState([]);
  const [home, away] =useState([]);

  const [data, setData] = useState({
    home: "",
    away: "",
    startTime: "",
    homeGoal:"",
    awayGoal:"",
})

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


function submit(e){
  e.preventDefault();
  axios.post("http://18.181.217.30:8080/api/v1/matches",{
      home: games.filter(game => game.name === data.home).map(game => {
        console.log(game._id);
      })[0],  
      away: games.filter(game => game.name === data.away).map(game => game._id)[0],
      startTime: data.startTime,
      homeGoal: parseInt(data.homeGoal),
      awayGoal: parseInt(data.awayGoal),
    })
    .then(res=> {
      console.log(res.data);
      console.log(res.data.home);
    })
}
function handle(e){
  const newdata = {...data}
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata);
  
}

  return (
    <div>
      <div className='Header'>
      <Admin_Header/>
      </div>
      <form className='container mt-5' onSubmit={(e) => submit(e)}>
      <h2>Jadval</h2>
      <select name="name" id="name" className='form-control fs-3' onChange={handleSelectChange} >
      {tables.map((post) => (
        <option key={post._id} value={post._id} className='fs-5 form-control' >{post.name}</option>
      ))}
      </select>

      <select  id="home" className='form-control mt-3' name='home'  onChange={e=>handle(e)}>
        {games.map((list)=>(

        <option value={list._id}  >{list.name}</option>
        ))}
      </select>
        <div className='d-flex mt-2'>
          <input type="number"  className='form-control' onChange={e=>handle(e)} name='homeGoal' id='awayGoal'/>
          <input type="number" className='form-control' onChange={e=>handle(e)} name='awayGoal' id='awayGoal'/>
        </div>
        
        <select name="away" id="away" className='form-control mt-4' onChange={e=>handle(e)}>
        {games.map((list)=>(

        <option  value={list._id} >{list.name}</option>
        ))}
      </select>
      <input type="date" className='form-control' onChange={e=>handle(e)} name='startTime' id='startTime' />
      <button className='btn btn-success w-25 mt-4'>Yuklash</button>
      </form>
     <div className='Header text-start mt-5'>
     <Footer/>
     </div>
    </div>
  )
}

export default Admin_Home_Jadval;
