import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Unknown } from '@pages/Unknown/Unknown';
import { NotFound } from '@pages/NotFound/NotFound';
import AuthRoute from '@routes/accessHandler/AuthRoute';
import { Welcome } from '@pages/Welcome/Welcome';
import { Login } from '@pages/Login/Login';
import Layout from '@routes/components/Layout';
import { Plant } from '@pages/Plant/Plant';
import { Auth0Provider } from '@auth0/auth0-react';
import { CallbackAuth0 } from '@pages/Callback/CallbackAuth0';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  throw new Error('Auth0 domain and clientId must be defined');
}

const providerConfig = {
  domain,
  clientId,
  authorizationParams: {
    // eslint-disable-next-line camelcase
    redirect_uri: `${window.location.origin}/callback`
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<CallbackAuth0 />} />
      <Route element={<Layout />}>
        <Route element={<AuthRoute />}>
          {/** Put here all the routes where the user must be authenticated */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/plants" element={<Plant />} />
          <Route path="/not-found" element={<NotFound />} />
        </Route>
        {/** Unknown path redirection */}
        <Route path="*" element={<Unknown />} />
      </Route>
    </Route>
  )
);

export const AppRouter = () => (
  <Auth0Provider {...providerConfig}>
    <RouterProvider router={router} />{' '}
  </Auth0Provider>
);
