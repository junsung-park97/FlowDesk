import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", async () => {
    return HttpResponse.json(
      {
        user: {
          email: "1234@gmail.com",
          name: "예비 사용자",
        },
        accessToken: "jwt-access-token-1234",
      },
      { status: 200 },
    );
  }),
];
