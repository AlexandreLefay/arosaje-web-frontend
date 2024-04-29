import { observer } from 'mobx-react-lite';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * Component used to handle the authentication of the user before loading the routes
 * @return children routes if the user is authenticated, otherwise redirect to the login page
 */
const AuthRoute = observer(() => {
  /**
   * Check if the user is authenticated (Currently hardcoded to false but should be replaced with a real check with useStore())
   */
  const [isAuthenticated] = [false];
  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to={'/welcome'} />;
});

export default AuthRoute;
