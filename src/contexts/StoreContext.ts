import RootStore from '@stores/global/RootStore';
import { createContext } from 'react';

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
