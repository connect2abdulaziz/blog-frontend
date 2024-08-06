/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, user, login, signup, logout } = useAuthStore();

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
