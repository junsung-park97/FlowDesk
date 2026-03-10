import { httpClient } from "@/shared/api/client/base";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: { email: string; name: string };
  accessToken: string;
}

export const loginApi = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  return httpClient<LoginResponse>("/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
