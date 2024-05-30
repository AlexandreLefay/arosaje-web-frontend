import { useAuthStore } from '@hooks/contexts/useStore';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

/**
 * Page that contains all the components displayed on the application homepage
 */
export const Welcome = observer(() => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
});
