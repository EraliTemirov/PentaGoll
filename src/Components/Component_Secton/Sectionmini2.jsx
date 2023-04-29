import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sectionmini2 = () => {
  const [tables, setTable] = useState([]);
  const [games, setGame] = useState([])

  
  useEffect(() => {
      axios.get('https://azizjon003.jprq.live/api/v1/ligues/list')
      .then(res => {
        console.log(res);
        setTable(res.data.data)
      })
      .catch((error) => {
        console.log(error.message);
     });
 }, []);
  

  return (
    <div className='container1'>
      <h2>Jadval </h2>
      <select name="name" id="name" className='form-control'>
      {tables.map((post) => (
        <option value="value" >{post.name}</option>
      ))}
      </select>
      <table className='w-100 form-control'>
      
  {tables.map((post) => (
      <tr className='fs-4' >
        <th>1</th>
        <td>{post.name} </td>
        <td>15</td>
        <td>14</td>
  </tr>
      ))}
</table>
    </div>
  )
}

export default Sectionmini2
