// src/contexts/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { HttpClient } from '../../api/HttpClient';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      HttpClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await HttpClient.post('/login', { username, password });
      localStorage.setItem('authToken', response.data.token);
      HttpClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setIsAuthenticated(true);
      setToken(response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete HttpClient.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    setToken(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
