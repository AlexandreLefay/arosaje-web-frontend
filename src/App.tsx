import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from '@styles/theme';
import '@translations/i18n';
import './App.scss';
import { StoreProvider } from '@contexts/StoreContext';
import { rootStore } from '@stores/global/RootStore';
import { AppRouter } from '@routes/AppRoutes';
import { AuthProvider } from '@hooks/auth/useAuth';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <StoreProvider value={rootStore}>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </StoreProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}
