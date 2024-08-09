import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
};
