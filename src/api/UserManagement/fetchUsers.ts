import { z } from "zod";
import wrappedFetch from "../fetch/wrappedFetch";

const usersResponseSchema = z.array(
  z.object({
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  }),
);
const fetchUsers = async () => {
  const response = await wrappedFetch(process.env.API_URL + "/api/users");

  const responseJson = await response.json();

  if (!response.ok && response.status !== 401) {
    throw new Error(responseJson);
  }

  return usersResponseSchema.parse(responseJson.data);
};

export default fetchUsers;
