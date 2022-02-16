import React, { Fragment, useEffect, useState } from 'react';
import { calcWinning, getScore } from '../services/frontendServices.js';
import logo from '../BeerpongLogo.png';
import '../App.css';
import Scoreline from './Scoreline.js';

const Scoreboard = () => {
  const [scores, setScores] = useState([]);
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (scores.length === 0) {
      getScore().then((value) => {
        setScores(value);
        setWinner(calcWinning(value));
      });
    }
  });

  return (
    <Fragment>
      <div className="card">
        {' '}
        <img className="align-middle" src={logo}></img>
        <>{Scoreline(scores)}</>
        <h2 className="text-center">Current Leader</h2>
        <h1 className="font-weight-bold text-center">{winner}</h1>
      </div>
    </Fragment>
  );
};

export default Scoreboard;
