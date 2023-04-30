import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const SigIn = () => {
  return (
    <>
    <div className='Header'>
      <Header/>
    </div>
        <div className="container d-center">
        <div className="col-6 p-5">
        <form className='mt-5 mb-5' >
            <div className="mb-5">
                <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Kirish</button>
         </form>
        </div>
        </div>
      <div className='Header'>
      <Footer/>
      </div>
      
    </>
  )
}

export default SigIn