import { QueryOptions } from "@tanstack/react-query";
import fetchUsers from "./fetchUsers";

const getUsersQuery = () => {
  return {
    queryKey: ["users"],
    queryFn: async () => await fetchUsers(),
  } satisfies QueryOptions<Awaited<ReturnType<typeof fetchUsers>>>;
};
export default getUsersQuery;
