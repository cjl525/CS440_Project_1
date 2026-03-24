// userQueries
// This module contains ONLY queries that the user can make to the database

import pool from '../model/database.js';

const userQueries = {


	// Login page query
	async login(username, password) {
		const result = await pool.query(
			'SELECT * FROM users WHERE username = $1 AND password = $2',
			[username, password]
		);
		return result.rows[0];
	},


	// Registration query
	async createUser(username, password) {
		const result = await pool.query(
			'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
			[username, password]
		);
		return result.rows[0];
	}
};

export default userQueries;