import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

/**
 * Helper component that allows the page to display the Header and the Routes in the App component
 * @returns The header and the route where the user is.
 */
function Layout() {
  return (
    <Stack direction="row">
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
    </Stack>
  );
}

export default Layout;
