import React, { useEffect } from 'react';
import axios from 'axios';

const Sectionmini2 = () => {

 useEffect(()=>{
  let res =  axios.get(`https://azizjon003.jprq.live/api/v1/ligues/list`)
  .then((res) => res.json())
  .then((json) => data(json));
 }, [])
  

  return (
    <div className='container'>
      <h2>Jadval</h2>
      <select name="name" id="name" className='form-control'>
        <option value="valiu">Italia.A seriya</option>
        <option value="valiu">Italia.A seriya</option>
        <option value="valiu">Italia.A seriya</option>
      </select>
      <table className='w-100 form-control'>
  <tr className='fs-4' >
    <th>N</th>
    <th>Comanda</th>
    <th>O'yinlar</th>
    <th>Ballar</th>
  </tr>
  <tr className='fs-4' >
    <th>1</th>
    <td>Alfreds </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
  <th>1</th>
    <td>Centro </td>
    <td>15 </td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
    <th>1</th>
    <td>Alfreds </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
  <th>1</th>
    <td>Centro </td>
    <td>15 </td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
    <th>1</th>
    <td>Alfreds </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr  className='fs-4' >
  <th>1</th>
    <td>Centro </td>
    <td>15 </td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
    <th>1</th>
    <td>Alfreds </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr className='fs-4' >
  <th>1</th>
    <td>Centro </td>
    <td>15 </td>
    <td>14</td>
  </tr>
</table>
    </div>
  )
}

export default Sectionmini2
