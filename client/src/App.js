import './App.css';
import React, { Fragment } from 'react';
import Scoreboard from './components/Scoreboard.js';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Scoreboard></Scoreboard>
      </div>
    </Fragment>
  );
}

export default App;
