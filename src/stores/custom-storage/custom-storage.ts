import { PersistStorage } from "zustand/middleware";
import { AppsStore } from "../useAppStore";


export const customStorage: PersistStorage<AppsStore> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};
