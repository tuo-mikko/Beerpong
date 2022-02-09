import React, { Fragment, useEffect, useState } from 'react';
import '../App.css';

const Scoreline = (data) => {
  if ((data.length = !0)) {
    return (
      <Fragment>
        <h1 className="font-weight-bold text-center">
          {data[0].wins} - {data[1].wins}
        </h1>
        <h1 className="font-weight-bold text-center">
          {data[0].player_name} - {data[1].player_name}
        </h1>
      </Fragment>
    );
  }
  return;
};

export default Scoreline;
