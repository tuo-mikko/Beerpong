import { Router } from 'express';
import {
  getLatest,
  getScore,
  getResults,
  postResult,
  deleteResult,
} from '../controllers/resultController.js';
const resultRouter = Router();

/**
 * Add a new result
 */

resultRouter.post('/', postResult);

// Get score

resultRouter.get('/', getScore);

// Get all results

resultRouter.get('/total', getResults);

// Get latest result

resultRouter.get('/latest', getLatest);

// Delete a result
// TODO: Update the score accordingly

resultRouter.delete('/:id', deleteResult);

export default resultRouter;
