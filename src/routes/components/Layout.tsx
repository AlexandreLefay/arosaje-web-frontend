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
            <div className={styles.pageContainer}>
                <main className={styles.mainContent}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <Stack direction="row">
            <div className={styles.pageContainer}>
                <Navbar/>
                <main className={styles.mainContent}>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </Stack>
    );
});

export default Layout;
