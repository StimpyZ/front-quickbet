import { User } from "firebase/auth";
import { SliceType } from "../generic/SliceType";


export interface AuthSlice {
  loggedUser?: User;
  logIn: (user: User) => void;
  logOut: () => void;
}

type AuthState = SliceType<AuthSlice>;

const createAuthSlice: AuthState = (set, _get, _api) => ({
  loggedUser: undefined,
  logIn: user => {
    set(state => {
      state.loggedUser = user;
    });
  },
  logOut: () => {
    set(state => {
      state.loggedUser = undefined;
    });
  },
});

export default createAuthSlice;
