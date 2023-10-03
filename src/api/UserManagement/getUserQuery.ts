import fetchUsers from "./fetchUser";

const getUserQuery = () => {
  return {
    queryKey: ["users"],
    queryFn: async () => await fetchUsers(),
  };
};
export default getUserQuery;
