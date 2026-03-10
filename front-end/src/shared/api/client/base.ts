export const httpClient = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => {
  const url = `${endpoint}`;

  // 요청 기본 헤더
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // HTTP 상태 처리
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "네트워크 응답 에러 발생");
  }

  return response.json();
};
