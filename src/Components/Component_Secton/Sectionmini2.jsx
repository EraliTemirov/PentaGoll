import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sectionmini2 = () => {
  const [tables, setTable] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("644dbf62a53d145b97af74b6");
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

     axios.get(`http://18.181.217.30:8080/api/v1/ligues/list/644d46e3a6fe14d40b89440e?starttime=2022&endtime=2023`)
     .then(res => {
       const newArray = res.data.data[0].teams
       console.log(newArray);
       setGame(newArray)
 
     })
     .catch((error) => {
       console.log(error.message);
    });
 }, []);
  

  return (
    <div className='container1'>
      <h2>Jadval </h2>
      <select name="name" id="name" className='form-control' onChange={handleSelectChange}>
      {tables.map((post) => (
        <option key={post._id} value={post._id}  >{post.name}</option>
      ))}
      </select>
      <table className='w-100 form-control'>
      <tr className='fs-5' >
          <th>№</th>
          <th>Команда </th>
          <th className='p-3'>И</th>
          <th>O</th>
      </tr>
  {games.map((list,index) => (
      <tr className='fs-4' >
          <td>{index+1} .</td>
          <td>{list.name} </td>
          <td>{list.numberMatches}</td>
          <td>{list.points}</td>
      </tr>
      ))}
</table>
    </div>
  )
}

export default Sectionmini2
