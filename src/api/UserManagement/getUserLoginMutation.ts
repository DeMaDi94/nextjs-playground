import loginUser from "./loginUser";

const getLoginUserMutation = () => {
  return {
    mutationFn: loginUser,
    mutationKey: ["login"],
  };
};

export default getLoginUserMutation;
