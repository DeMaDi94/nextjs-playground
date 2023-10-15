import wrappedFetch from "../fetch/wrappedFetch";

const logoutUser = async () => {
  const response = await wrappedFetch(
    (process.env.API_URL + "/api/user/logout") as string,
    { method: "post" },
  );

  const responseJson = await response.json();

  if (!response.ok) {
    throw new Error(responseJson);
  }

  return responseJson;
};

export default logoutUser;
