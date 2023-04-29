import React from 'react'

const Admi_Home2 = () => {
  return (
    <div className='container1 m-3 mt-5'>
        <h2 className='container1 text-center'>Turnir jadvalini yuklash</h2>
      <div className='w-50 container p-3'>
        <form >
        <label htmlFor="name_bir" className='fs-4'>Birinchi jamoa</label>
       <input type="text" id='name_bir' className='form-control fs-5' />

         <div className='mt-3 d-flex'>
            <input type="number" className='form-control m-2'/>
            <label className='fs-1' >:</label>
            <input type="number" className='form-control m-2' />
         </div>

       <label htmlFor="name_ikki" className='fs-4 mt-3'>Ikkinchi jamoa</label>
       <input type="text" id='name_ikki' className='form-control fs-5' />
        
        <input type="datetime-local" className='w-50 form-control mt-3' />
       <button className='btn btn-success w-25 m-3'>Yuklash</button>
        </form>
      </div>
    </div>
  )
}

export default Admi_Home2;
