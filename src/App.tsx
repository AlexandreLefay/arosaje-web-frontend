import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from '@styles/theme';
import '@translations/i18n';
import './App.scss';
import { StoreProvider } from '@contexts/StoreContext';
import { rootStore } from '@stores/global/RootStore';
import { AppRouter } from '@routes/AppRoutes';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider value={rootStore}>
        <AppRouter />
      </StoreProvider>
    </ThemeProvider>
  );
}
