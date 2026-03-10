import { useUserStore } from "@/entities/user/model/store";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api/login";

export const useLogin = () => {
  const navigate = useNavigate();
  const setCredentials = useUserStore((state) => state.setCredentials);

  const handleLogin = async (email: string, _password: string) => {
    try {
      const data = await loginApi({ email, password: _password });

      setCredentials(data.user, data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "로그인 실패",
        error instanceof Error ? error.message : error,
      );
    }
  };

  return { handleLogin };
};
