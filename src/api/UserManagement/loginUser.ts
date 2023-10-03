import wrappedFetch from "../fetch/wrappedFetch";

const loginUser = async (data: { email: string; password: string }) => {
  const response = await wrappedFetch(
    (process.env.API_URL + "/api/login") as string,
    { method: "post", body: JSON.stringify(data) },
  );

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson);
  }

  return responseJson;
};

export default loginUser;
