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
      <img className="align-middle" src={logo}></img>
      <h2 className="text-center mt-3">Current Leader</h2>
      <h1 className="font-weight-bold text-center">{winner}</h1>
      <></>
    </Fragment>
  );
};

export default Scoreboard;
