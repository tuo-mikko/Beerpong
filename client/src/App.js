import './App.css';
import React, { Fragment } from 'react';
import Scoreboard from './components/Scoreboard.js';
import AddResult from './components/AddResult';

function App() {
  return (
    <Fragment>
      <div className="container text-center">
        <Scoreboard />
        <AddResult />
      </div>
    </Fragment>
  );
}

export default App;
