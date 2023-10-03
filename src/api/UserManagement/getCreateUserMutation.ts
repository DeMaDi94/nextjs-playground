import { CreateUserForm } from "@/components/UserCreateModal";
import { QueryClient } from "@tanstack/react-query";
import createUser from "./createUser";

const getCreateUserMutation = (queryClient: QueryClient) => {
  return {
    mutationFn: async (data: CreateUserForm) => await createUser(data),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  };
};

export default getCreateUserMutation;
