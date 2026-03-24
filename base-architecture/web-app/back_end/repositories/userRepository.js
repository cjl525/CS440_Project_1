import pool from '../config/database.js';

export const findUserByUsernameAndPassword = async (username, password) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1 AND password = $2',
    [username, password]
  );
  return result.rows[0];
};

export const createUser = async (username, password) => {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  return result.rows[0];
};
