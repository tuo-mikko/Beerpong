const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a result

app.post('/results', async (req, res) => {
  try {
    const date = new Date().toISOString().slice(0, 10);
    console.log(date);
    const newResult = await pool.query(
      'INSERT INTO results (winner_id, cups_left, played_on) VALUES($1, $2, $3)',
      [req.body.winner_id, req.body.cups_left, date]
    );

    const updateStats = await pool.query(
      'UPDATE players SET wins = wins + 1 WHERE player_id = $1',
      [req.body.winner_id]
    );

    res.json(newResult);
  } catch (err) {
    console.log(err.message);
  }
});

// Get score

app.get('/results', async (req, res) => {
  try {
    const stats = await pool.query('SELECT * FROM players');
    res.json(stats.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get wins

app.get('/results/total', async (req, res) => {
  try {
    const stats = await pool.query('SELECT * FROM results');
    res.json(stats.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get latest result

app.get('/results/latest', async (req, res) => {
  try {
    const stat = await pool.query(
      'SELECT (result_id, winner_id, cups_left, played_on)  FROM results WHERE result_id=(SELECT max(result_id) FROM results)'
    );
    res.json(stat.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Delete a result
// TODO: Update the score accordingly

app.delete('/results/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await pool.query(
      'DELETE FROM results WHERE result_id = $1',
      [id]
    );
    res.json('Result was deleted');
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log('Server has started on port 5000');
});
