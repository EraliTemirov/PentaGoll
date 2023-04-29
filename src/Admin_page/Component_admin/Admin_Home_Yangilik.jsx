import React from 'react'

const Admin_Home_Yangilik = () => {
  return (
    <div className='container1 m-3'>
      <h2 className='container text-center'>Yangiliklar yuklash</h2>
       <div className='w-50 container1  p-3'>
        <form>
          <label htmlFor="name" className='fs-4 p-1'> Yangilik nomi</label>
          <input type="text" id='name' className='form-control fs-5' />

          <label htmlFor="name_matn" className='fs-4 p-1'> Yangilik matni</label>
          <textarea type="text" id='name_matn'rows="5" className='form-control fs-5' />


          <label htmlFor="name_img" className='fs-4 p-1 mt-4'> Yangilik rasmi</label>
          <input type="file" id='name_img' className='form-control fs-5' />
          <button className='btn btn-success w-25 mt-3'>Yuklash</button>
        </form>
       </div>
    </div>
  )
}

export default Admin_Home_Yangilik;
