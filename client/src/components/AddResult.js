import React, { Fragment, useState } from 'react';
import Modal from './Modal.js';

const AddResult = () => {
  const [show, setShow] = useState(false);
  const [cups, setCups] = useState(5);
  const [winner, setWinner] = useState();
  const [active, setActive] = useState(['active', '']);

  const handleCupChange = (value) => {
    if (value === 0 || value === 11) {
      return;
    }
    setCups(value);
  };

  const handleWinnerChange = (winnerId) => {
    setWinner(winnerId);

    if (winnerId == 1) {
      setActive(['', 'active']);
      return;
    }

    setActive(['active', '']);
  };

  return (
    <>
      <button className="nav-button" onClick={() => setShow(true)}>
        Add result
      </button>

      <Modal
        title={'Add a new game result'}
        onClose={() => setShow(false)}
        show={show}
      >
        <div className="modall-winner">
          <p className="modall-subtitle">Game winner</p>
          <button className={active[0]} onClick={() => handleWinnerChange(2)}>
            Jimi
          </button>
          <button className={active[1]} onClick={() => handleWinnerChange(1)}>
            Posti
          </button>
        </div>
        <div className="modall-cups">
          <p>Cups Left</p>
          <p>
            <button
              className="addition-button"
              onClick={() => handleCupChange(cups - 1)}
            >
              -
            </button>
            {cups}
            <button
              className="addition-button"
              onClick={() => handleCupChange(cups + 1)}
            >
              +
            </button>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default AddResult;
