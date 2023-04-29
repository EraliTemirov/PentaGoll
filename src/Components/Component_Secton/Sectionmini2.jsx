import React, { useEffect, useState } from 'react';

const Sectionmini2 = () => {



  const [data, Setdata] = useState([]);


//  useEffect(() => {
//   fetch(`https://azizjon003.jprq.live/api/v1/ligues/list`)
//   .then((res) => res.json())
//   .then((json) => Setdata(json));
//  }, []);
//  console.log(data);
  

  return (
    <div className='container1'>
      <h2>Jadval </h2>
      <select name="name" id="name" className='form-control'>
        <option value="valiu">Italia.A seriya</option>
        <option value="valiu">Italia.A seriya</option>
        <option value="valiu">Italia.A seriya</option>
      </select>
      <table className='w-100 form-control'>

      <th>{data.status}</th>

      {data?.map((data, index)=>(
  <tr className='fs-4' key={index} >
    <th>{data.data}</th>
    <th>Scores</th>
    <th>O'yinlar</th>
    <th>Ballar</th>
  </tr>
))}

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
