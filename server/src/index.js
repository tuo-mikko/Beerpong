import express from 'express';
import cors from 'cors';
import resultRouter from './routes/resultRouter.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/results', resultRouter);

// Create a result

app.listen(5000, () => {
  console.log('Server has started on port 5000');
});
