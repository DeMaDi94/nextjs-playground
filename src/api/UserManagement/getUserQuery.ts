import fetchUser from "./fetchUser";

const getUserQuery = () => {
  return {
    queryKey: ["users"],
    queryFn: async () => await fetchUser(),
  };
};
export default getUserQuery;
