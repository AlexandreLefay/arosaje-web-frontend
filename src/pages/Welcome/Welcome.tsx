import { observer } from 'mobx-react-lite';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserInfo } from '@api/auth0/Auth0API';

/**
 * Page that contains all the components displayed on the application homepage
 */
export const Welcome = observer(() => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getTokenAndFetchUserInfo = async () => {
      try {
        const token = await getAccessTokenSilently();
        fetchUserInfo(token);
      } catch (error) {
        console.error('Error getting access token', error);
      }
    };

    getTokenAndFetchUserInfo();
  }, [getAccessTokenSilently]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
});
