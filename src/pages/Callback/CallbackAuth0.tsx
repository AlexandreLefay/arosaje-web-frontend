import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { loginWithAuth0 } from '@api/auth0/Auth0API';

export const CallbackAuth0 = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();
  const [isLoginCompleted, setIsLoginCompleted] = useState(false);

  useEffect(() => {
    const performLogin = async () => {
      if (isAuthenticated && user && !isLoginCompleted) {
        localStorage.setItem('PHOTO_URL', user.picture as string);
        try {
          await loginWithAuth0(user.nickname, user.sub, user.email, user.picture);
          setIsLoginCompleted(true);
        } catch (e) {
          console.error('Error during Auth0 login:', e);
        }
      }
    };

    performLogin();
  }, [isAuthenticated, user, isLoginCompleted]);

  if (isLoading || !isLoginCompleted) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Authentication Error: {error.message}</p>;
  }

  if (isAuthenticated && user) {
    return <Navigate to="/welcome" />;
  }

  return <Navigate to="/login" />;
};
