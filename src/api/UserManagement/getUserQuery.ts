import fetchUser from "./fetchUser";

const getUserQuery = () => {
  return {
    queryKey: ["user"],
    queryFn: async () => await fetchUser(),
  };
};
export default getUserQuery;
