import wrappedFetch from "../fetch/wrappedFetch";

const fetchUser = async () => {
  const response = await wrappedFetch(process.env.API_URL + "/api/user");

  const responseJson = await response.json();

  if (!response.ok && response.status !== 401) {
    throw new Error(responseJson);
  }

  return responseJson;
};

export default fetchUser;
