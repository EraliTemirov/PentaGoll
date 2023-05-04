import React, { useEffect, useState } from 'react';
import '../Sass/Section1.scss';
import axios from 'axios';

const Section1 = ({ id = 'default_id', name, price }) => {
  const [leagues, setLeagues] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    // get all leagues
    axios
      .get('http://18.181.217.30:8080/api/v1/ligues/list')
      .then((res) => {
        console.log(res);
        setLeagues(res.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // get games for default league id
    axios
      .get('http://18.181.217.30:8080/api/v1/teams/644dbf62a53d145b97af74b5')
      .then((res) => {
        const newArray = res.data.data[0].scores;
        console.log(newArray);
        setGames(newArray);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function handleButtonChange(event) {
    console.log(event.target.value);
    const selectedId = String(event.target.value);
    setSelectedProductId(selectedId);
    console.log(selectedId);
    axios
      .get(`http://18.181.217.30:8080/api/v1/teams/${selectedId}`)
      .then((res) => {
        const newArray = res.data.data[0].scores;
        console.log(newArray);
        setGames(newArray);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="container1">
      <div className="mt-5 d-flex section1_1 p-2 gap-2">
        {leagues.map((post) => (
          <button className="btn btn-light" onClick={handleButtonChange} key={post._id} value={post._id}>
            {post.name}
          </button>
        ))}
      </div>
      <div className="section1_1 d-flex justify-content-between mt-2 p-2 text-center app-row">
        {games.map((game) => (
          <div className="col-20" key={game._id}>
            <div className="m-2">
              <p className="d-block btn btn-light fz-14">
                {game.homeTeamName} {game.homeTeamScore}:{game.awayTeamScore} {game.awayTeamName}
              </p>
              <span>{new Date(`${game.startTime}`).toLocaleDateString()} {new Date(`${game.startTime}`).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
