import {ThemeProvider} from '@emotion/react';
import {CssBaseline} from '@mui/material';
import {router} from '@routes/AppRoutes';
import {theme} from '@styles/theme';
import '@translations/i18n';
import {Outlet, RouterProvider} from 'react-router-dom';
import {AuthProvider} from './hooks/auth/useAuth';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthProvider>
          <RouterProvider router={router()}>
            <AppRouter />
          </RouterProvider>
        </AuthProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

/**
 * Router provider for the application
 * @returns router provider
 */
function AppRouter() {
  return <Outlet />; //
}
