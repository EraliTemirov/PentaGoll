import React, { useState } from 'react';
import axios from 'axios';
import Admin_Header from '../Admin_Header';
import Footer from '../../Components/Footer';

const Admin_Home_Mavsum = () => {

    const [values, setValues] = useState({
        name_id: "",
        startTime: "",
        endTime: "",
      });



      async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          let {
            data: { data, status },
          } = await axios.post(`http://18.181.217.30:8080/api/v1/ligues/list`,
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
       <div className='container1 m-3 mt-5'>
        <h2 className='container1 text-center'>Mavsum</h2>
      <div className='w-50 container p-3'>

        <form  onSubmit={handleSubmit} >
        <label htmlFor="name_bir" className='fs-4'> Mavsum nomi</label>
       <input type="text" id='name_bir' className='form-control fs-5'  
       values={values.name_id}
       onChange={handelInputChange} />

         <div className='mt-5 d-flex'>
            <input type="datetime-local" className='form-control m-2'/>
            <label className='fs-1' >:</label>
            <input type="datetime-local" className='form-control m-2' />
         </div>
        
        
       <button className='btn btn-success w-25 mt-5'>Yuklash</button>
        </form>
      </div>
    </div>
   <div className='Header'>
   <Footer/>
   </div>
    </div>
  )
}

export default Admin_Home_Mavsum
