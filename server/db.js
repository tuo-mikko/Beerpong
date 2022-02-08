const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'SaunaKalja95',
  host: 'localhost',
  port: 5432,
  database: 'beerpong',
});

module.exports = pool;
