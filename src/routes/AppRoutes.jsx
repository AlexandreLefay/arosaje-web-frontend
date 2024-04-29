import Home from '@pages/Home/Home';
import { NotFound } from '@pages/NotFound/NotFound';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';

/**
 * Variable used to handle all the routes of the application
 *
 * @param queryClient queryClient
 */
export const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        {/** Unknown path redirection */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
