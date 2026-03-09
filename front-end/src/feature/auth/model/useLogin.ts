import { useUserStore } from "@/entities/user/model/store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const setCredentials = useUserStore((state) => state.setCredentials);

  const handleLogin = async (email: string, _password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: _password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
      }

      const data = await response.json();
      if (data.user && data.accessToken) {
        setCredentials(data.user, data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogin };
};
