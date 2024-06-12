import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@hooks/contexts/useStore';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * Component used to handle the authentication of the user before loading the routes
 * @return children routes if the user is authenticated, otherwise redirect to the login page
 */
const AuthRoute = observer(() => {
  const { isAuthenticated } = useAuth0();
  /**
   * Check if the user is authenticated
   */
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated && !isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
});

export default AuthRoute;
