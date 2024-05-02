import { AuthService } from "@/backend";
import Cookies from "js-cookie";
import { create } from "zustand";

type AuthStateType = {
  isLoggedIn: boolean;
};

type AuthActions = {
  setLoggedIn: () => void;
  setLoggedOut: () => void;
};

export const useAuthStore = create<AuthStateType & AuthActions>((set) => ({
  isLoggedIn: !!Cookies.get("isLoggedIn"),
  setLoggedIn: () => {
    set(() => ({ isLoggedIn: true }));
  },
  setLoggedOut: () => {
    Cookies.remove("isLoggedIn");
    AuthService.postAuthLogout();
    set(() => ({ isLoggedIn: false }));
  },
}));
