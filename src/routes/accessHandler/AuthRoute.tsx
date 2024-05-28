import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@hooks/contexts/useStore';

/**
 * Component used to handle the authentication of the user before loading the routes
 * @return children routes if the user is authenticated, otherwise redirect to the login page
 */
const AuthRoute = observer(() => {
  /**
   * Check if the user is authenticated
   */
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
});

export default AuthRoute;
