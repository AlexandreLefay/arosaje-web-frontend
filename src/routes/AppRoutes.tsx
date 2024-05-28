import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Unknown } from '@pages/Unknown/Unknown';
import { NotFound } from '@pages/NotFound/NotFound';
import AuthRoute from '@routes/accessHandler/AuthRoute';
import { Welcome } from '@pages/Welcome/Welcome';
import { Login } from '@pages/Login/Login';
import Layout from '@routes/components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    // element={<Layout />}
    // loader={() => {
    //   /* Try to authenticate the user before loading routes */
    //   loadCurrentUser();
    //   return null;
    // }}
    >
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route element={<AuthRoute />}>
          {/** Put here all the routes where the user must be authenticated */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/not-found" element={<NotFound />} />
        </Route>
        {/** Unknown path redirection */}
        <Route path="*" element={<Unknown />} />
      </Route>
    </Route>
  )
);

export const AppRouter = () => <RouterProvider router={router} />;
