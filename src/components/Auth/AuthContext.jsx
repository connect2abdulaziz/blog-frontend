/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

// Create a Context for authentication
const AuthContext = createContext();

// Define the reducer function to handle authentication actions
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Provide a Context to the component tree
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // Use useReducer to manage the authentication state
  const [state, dispatch] = useReducer(authReducer, { user: null });

  // Update this URL to match your local API endpoint
  const apiBaseUrl = 'http://localhost:3000/api/v1/users';

  // Login function to authenticate users
  const login = async (data) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, data);
      dispatch({ type: 'LOGIN', payload: response.data });
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error, e.g., show a notification or message to the user
    }
  };

  // Signup function to register new users
  const signup = async (data) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/signup`, data);
      dispatch({ type: 'SIGNUP', payload: response.data });
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error, e.g., show a notification or message to the user
    }
  };

  // Logout function to clear user state
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);