import React, { Fragment, useEffect, useState } from 'react';
import '../App.css';

const Scoreline = (data) => {
  if (data.length != 0) {
    const line = (
      <Fragment>
        <div className="font-weight-bold text-center mt-3 scoreline">
          {data[0].player_name} {data[0].wins}-{data[1].wins}
          {'  '}
          {data[1].player_name}
        </div>
      </Fragment>
    );
    return line;
  }
  return;
};

export default Scoreline;
