import * as userRepository from '../repositories/userRepository.js';

export const loginUser = async (username, password) => {
  const user = await userRepository.findUserByUsernameAndPassword(username, password);
  return user;
};

export const registerUser = async (username, password) => {
  const newUser = await userRepository.createUser(username, password);
  return newUser;
};
