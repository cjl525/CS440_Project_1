// Login routes
// This module contains route handlers for the login and account creation pages

import express from 'express';
import userQueries from '../model/userQueries.js';

const router = express.Router();


// Login route
export const login = async (req, res) => {
	const { username, password } = req.body;

	try { 
		const user = await userQueries.login(username, password);
		if (user) {
			res.status(200).json({ message: 'Login successful', user });
		} else {
			res.status(401).json({ message: 'Invalid username or password' });
		}
	} catch (error) {
		console.error('Error during login:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
};

// Registration route
export const register = async (req, res) => { 
	const { username, password } = req.body;

	try { 
		const newUser = await userQueries.createUser(username, password);

		return res.status(201).json({ message: 'User created successfully', user: newUser });
	} catch (error) {
		console.error('Error during registration:', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
};

