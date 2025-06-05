const BASE_URL = "http://localhost:8080/api";

export const getSleepAnalytics = async (userId) => {
    const response = await fetch(`${BASE_URL}/sleep/user/${userId}`);
  return response.json();
};

export const postSleep = async (sleep) => {
  const response = await fetch(`${BASE_URL}/sleep`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sleep),
  });
  return response.json();
};
