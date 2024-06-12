import { useAuthStore } from '@hooks/contexts/useStore';
import { observer } from 'mobx-react-lite';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

/**
 * Page that contains all the components displayed on the application homepage
 */
export const Welcome = observer(() => {
  const authStore = useAuthStore();
  const { isAuthenticated } = useAuth0();

  if (!authStore.isAuthenticated && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
});
