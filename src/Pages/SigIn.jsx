import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const SigIn = () => {
    const url = ""
    const [data, setData] = useState({
        name: '',
        iduser:'',
        date: '',
    })
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            date: data.date,
            iduser:pareInt(data.iduser)
        })
        .then(res=> {
            console.log(res.data);
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
        <form action="" onSubmit={(e) => submit(e)}>
            <input onChange={(e) => handle(e)} id="name" type="text" placeholder='name'/>
            <input onChange={(e) => handle(e)} id='date' type="text"  placeholder='date' />
            <input onChange={(e) => handle(e)} id='iduser' type="number" placeholder='iduser'/>
        </form>
    </div>
  )
}

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