import logoutUser from "./logoutUser";

const getLogoutUserMutation = () => {
  return {
    mutationFn: logoutUser,
    mutationKey: ["logout"],
  };
};

export default getLogoutUserMutation;
