import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Unknown } from '@pages/Unknown/Unknown';
import { NotFound } from '@pages/NotFound/NotFound';
import { Welcome } from '@pages/Welcome/Welcome';
import AuthRoute from '@routes/accessHandler/AuthRoute';

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
      <Route path="/welcome" element={<Welcome />} />
      <Route element={<AuthRoute />}>
        {/** Put here all the routes where the user must be authenticated */}
        {/*<Route path="/" element={<Welcome />} />*/}
        <Route path="/not-found" element={<NotFound />} />
      </Route>
      {/** Unknown path redirection */}
      <Route path="*" element={<Unknown />} />
    </Route>
  )
);

export const AppRouter = () => <RouterProvider router={router} />;
