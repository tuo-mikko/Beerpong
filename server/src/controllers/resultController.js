import {
  createResult,
  listScore,
  listResult,
  listLatest,
  deleteRes,
  addScore,
  reduceScore,
  getResultWinner,
} from '../services/resultServices.js';

/**
 * Post a result, and add a win to the winner
 */

export const postResult = async (req, res) => {
  try {
    const { winnerId, cupsLeft } = req.body;

    const newResult = await createResult(winnerId, cupsLeft);

    addScore(winnerId);

    res.json(newResult);
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Get the wins and Ids of each player
 */
export const getScore = async (req, res) => {
  try {
    const score = await listScore();
    res.json(score);
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Get all the game results in the db
 */
export const getResults = async (req, res) => {
  try {
    const resultList = await listResult();
    res.json(resultList);
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Get the latest added game result
 */
export const getLatest = async (req, res) => {
  try {
    const latest = await listLatest();
    res.json(latest);
  } catch (err) {
    console.log(err.message);
  }
};

/**
 * Remove a result, and reduce the wins of the winner
 */
export const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    const losigPoints = await getResultWinner(id);
    reduceScore(losigPoints);
    deleteRes(id);

    res.json('Result was deleted');
  } catch (err) {
    console.log(err.message);
  }
};
