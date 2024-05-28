import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// @ts-ignore
import { HttpClient } from '@api/HttpClient';
import { Navigate } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      HttpClient.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await HttpClient.post('/login', { username, password });
      const authToken = response.headers['x-authorization'];
      const user = response.data;

      localStorage.setItem('authToken', authToken);
      localStorage.setItem('user', JSON.stringify(user));
      HttpClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

      setIsAuthenticated(true);
      console.log('isAuthenticated', isAuthenticated);
      setToken(authToken);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    delete HttpClient.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    setToken(null);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
