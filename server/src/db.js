import { config } from './config.js';
import pkg from 'pg';
const { Pool } = pkg;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = config;

export const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
});
