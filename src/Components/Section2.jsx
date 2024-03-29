import React, { useEffect, useState } from 'react';
import "../Sass/Section1.scss";
import axios from 'axios';
const Section2 = () => {
  const [leagues, setLeague] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("644dbf62a53d145b97af74b6");
  const [games, setGame] = useState([])


  function handleButtonChange(event) {  
    console.log(event.target.value);  
    const selectedId = String(event.target.value)
    console.log(setSelectedProductId(selectedId));;
    console.log(selectedId);
    axios.get(`http://18.181.217.30:8080/api/v1/teams/featured/${selectedId}`)
    .then(res => {
      const newArray = res.data.data[0].scores
      console.log(newArray);
      setGame(newArray)
    })
    .catch((error) => {
      console.log(error.message);
   });

  }

  useEffect(() => {
    // get all leagues
      axios.get('http://18.181.217.30:8080/api/v1/ligues/list')
      .then(res => {
        console.log(res);
        setLeague(res.data.data) 
      })
      .catch((error)=>{
        console.log(error.message);
      })
      .catch((error) => {
        console.log(error);
     });
 }, [selectedProductId]);


  return (
    
    <div className='container1'>

       
      <div className='mt-5 d-flex section1_1 p-2 gap-2'>
        {leagues.map((post) => (
            <button className='btn btn-light' onClick={handleButtonChange} key={post._id} value={post._id}>
              {post.name}
            </button>
          ))}
      </div>
      <div className='section1_1 d-flex justify-content-between mt-2 p-2 text-center app-row'>
       {games.map((game) => (
        <div className='col-20'>
        <div className="m-2">
        <p className='d-block btn btn-light fz-14'>{game.homeTeamName} {game.homeTeamScore}:{game.awayTeamScore} {game.awayTeamName}</p>
         <span>{new Date(`${game.startTime}`).toLocaleDateString()} {new Date(`${game.startTime}`).toLocaleTimeString()}</span>
        </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Section2
