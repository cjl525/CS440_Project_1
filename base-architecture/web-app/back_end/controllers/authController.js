import * as authService from '../services/authService.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.loginUser(username, password);
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await authService.registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
