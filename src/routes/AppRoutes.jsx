import {NotFound} from '@pages/NotFound/NotFound';
import {Login} from '@pages/Login/Login';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './components/Layout';

/**
 * Crée et retourne un routeur pour l'application en utilisant createBrowserRouter.
 */
export const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        {/** Redirect user when not found page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
