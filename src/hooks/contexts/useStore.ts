import RootStore from '@stores/global/RootStore';
import { useContext } from 'react';
import { StoreContext } from '@contexts/StoreContext';

/**
 * Hook used to get the store from the context
 * Putting the store in the context allows us to access it from anywhere in the application
 * To use it, simply call the useStore hook inside a component, another hook, a page, etc.
 */
export const useStore = (): RootStore => useContext(StoreContext);

/**
 * Hook used to get the auth store from the context
 * Why use this hook instead of the useStore hook?
 * This hook is used to get the auth store only, it's a way to avoid calling the useStore hook and then getting the auth store from it
 * To avoid to call all the stores to get only one, we use this hook
 */
export const useAuthStore = () => useStore().authStore;
export const usePlantStore = () => useStore().plantStore;
