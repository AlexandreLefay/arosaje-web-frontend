import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from '@styles/theme';
import '@translations/i18n';
import './App.scss';
import { StoreProvider } from '@contexts/StoreContext';
import { rootStore } from '@stores/global/RootStore';
import { AppRouter } from '@routes/AppRoutes';
import config from '../auth_config.json';
import { Auth0Provider } from '@auth0/auth0-react';

/**
 * Component used to handle the application
 */
export function App() {
  const { domain, clientId, redirectUri } = config;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider value={rootStore}>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
          <AppRouter />
        </Auth0Provider>
      </StoreProvider>
    </ThemeProvider>
  );
}
