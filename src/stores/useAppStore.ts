import {create, StateCreator} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import createFavouriteSlice, { type FavouriteSlice } from './slices/favourite-slice';
import { merge } from 'ts-deepmerge';
import { customStorage } from './custom-storage/custom-storage';
import createAuthSlice, { AuthSlice } from './slices/auth-slice';


// Importar los stores individuales

type ExtendedSlices = FavouriteSlice & AuthSlice

export type AppsStore = ExtendedSlices

type AppsStoreApi = StateCreator<
  AppsStore,
  [['zustand/devtools', never], ['zustand/immer', never]]
>;

const storeAPI: AppsStoreApi = (set, get, api) => {
  return {
    ...createFavouriteSlice(set, get, api),
    ...createAuthSlice(set, get, api),

  };
};

const useAppStore = create<AppsStore>()(
  devtools(
    persist(immer(storeAPI), {
      name: 'App Store', // Nombre para persistencia
      storage: customStorage,
      merge: (initial, persisted) => {
        const mergedState = merge(
          persisted || {},
          initial as AppsStore,
        ) as AppsStore;

        return mergedState;
      },
      partialize: state => {
        return state;
      },
    }),
    {
      name: 'App Store DevTools',
      enabled: true,
    },
  ),
);

export default useAppStore;
