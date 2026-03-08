import { create } from "zustand";

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

export const useUserStore = create<UserStore>((set) => ({
  // 초기값
  user: null,
  isAuthenticated: false,
  accessToken: null,

  // 액션구현: 로그인 성공 시 데이터 저장
  setCredentials: (user: User, token: string) => {
    set({
      user,
      isAuthenticated: true,
      accessToken: token,
    });
  },

  // 액션구현: 로그아웃 시 데이터 삭제
  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      accessToken: null,
    });
  },
}));
