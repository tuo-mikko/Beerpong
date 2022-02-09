import { pool } from '../db.js';

export const createResult = async (winnerId, cupsLeft) => {
  const newResult = await pool.query(
    'INSERT INTO result (winner_id, cups_left) VALUES($1, $2) RETURNING *',
    [winnerId, cupsLeft]
  );
  return newResult.rows[0];
};

export const listScore = async () => {
  const score = await pool.query('SELECT * FROM player');
  console.log(score.rows);
  return score.rows;
};

export const listResult = async () => {
  const resultList = await pool.query('SELECT * FROM result');
  return resultList.rows;
};

export const listLatest = async () => {
  const latest = await pool.query(
    'SELECT * FROM result WHERE result_id=(SELECT max(result_id) FROM result)'
  );
  return latest.rows[0];
};

export const deleteRes = async (result_id) => {
  const del = await pool.query('DELETE FROM result WHERE result_id = $1', [
    result_id,
  ]);
  return del;
};

export const addScore = async (player_id) => {
  const add = await pool.query(
    'UPDATE player SET wins = wins + 1 WHERE player_id = $1',
    [player_id]
  );
  return add;
};

export const reduceScore = async (player_id) => {
  const reduce = await pool.query(
    'UPDATE player SET wins = wins - 1 WHERE player_id = $1',
    [player_id]
  );
};

export const getResultWinner = async (result_id) => {
  const winner = await pool.query(
    'SELECT winner_id FROM result WHERE result_id = $1',
    [result_id]
  );

  return winner.rows[0].winner_id;
};
