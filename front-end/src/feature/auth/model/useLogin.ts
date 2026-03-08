import { useUserStore } from "@/entities/user/model/store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const setCredentials = useUserStore((state) => state.setCredentials);

  const handleLogin = async (email: string, _password: string) => {
    try {
      // const respon = await api.post('/login', {email, password});

      const mockUser = { email: email, name: "예비 사용자" };
      const mockToken = "jwt-access-token-1234";

      setCredentials(mockUser, mockToken);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogin };
};
