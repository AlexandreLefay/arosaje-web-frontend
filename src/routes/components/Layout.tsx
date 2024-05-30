import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { observer } from 'mobx-react-lite';
import { useAuthStore } from '@hooks/contexts/useStore';
import { Navbar } from '@components/global/Navigation/Navbar';
import { Footer } from '@components/global/Navigation/Footer';

/**
 * Helper component that allows the page to display the Header and the Routes in the App component
 * @returns The header and the route where the user is.
 */
const Layout = observer(() => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <main>
        <Outlet />
        <Footer />
      </main>
    );
  }

  return (
    <>
      <Stack direction="row">
        <main className={styles.pageContainer}>
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      </Stack>
    </>
  );
});

export default Layout;
