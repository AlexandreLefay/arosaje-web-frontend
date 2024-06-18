import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';

/**
 * Component used to handle the authentication of the user before loading the routes
 * @return children routes if the user is authenticated, otherwise redirect to the login page
 */
const AuthRoute = observer(() => {
  const { isAuthenticated, isLoading } = useAuth0();

  /**
   * Check if the user is loading
   */
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  /**
   * Check if the user is authenticated
   */
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
});

export default AuthRoute;
