import { ConfirmDialogProvider } from '@contexts/ConfirmDialogContext';
import { ReactQueryProvider } from '@contexts/ReactQueryProvider';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { router } from '@routes/AppRoutes';
import { theme } from '@styles/theme';
import { useQueryClient } from '@tanstack/react-query';
import '@translations/i18n';
import { RouterProvider } from 'react-router-dom';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ReactQueryProvider>
          <ConfirmDialogProvider>
            <AppRouter />
          </ConfirmDialogProvider>
        </ReactQueryProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

/**
 * Router provider for the application
 * @returns router provider
 */
function AppRouter() {
  const queryClient = useQueryClient();
  return <RouterProvider router={router(queryClient)} />;
}
