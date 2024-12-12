import {StateCreator} from 'zustand';
import {AppsStore} from '../useAppStore';

export type SliceType<T> = StateCreator<
  AppsStore,
  [['zustand/immer', never], ['zustand/devtools', never]],
  [],
  T
>;
