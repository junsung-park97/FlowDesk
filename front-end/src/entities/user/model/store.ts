import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  email: string;
  name: string;
}

interface UserStore {
  // 상태
  user: User | null;
  isAuthenticated: boolean;
  accessToken: string | null;

  // 액션
  setCredentials: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // 초기값
      user: null,
      isAuthenticated: false,
      accessToken: null,

      // 로그인(액션)
      setCredentials: (user: User, token: string) => {
        set({
          user,
          isAuthenticated: true,
          accessToken: token,
        });
      },

      // 로그아웃(액션)
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          accessToken: null,
        });
      },
    }),
    {
      // storage에 저장될 키 이름
      name: "user-auth-storage",
      // 사용할 저장소 이름
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        accessToken: state.accessToken,
      }),
    },
  ),
);
