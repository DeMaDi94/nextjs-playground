import getLoginUserMutation from "@/api/UserManagement/getUserLoginMutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../ui/card";

type formValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { handleSubmit, register } = useForm<formValues>();
  const mutation = useMutation(getLoginUserMutation());
  const router = useRouter();
  const submitHandler: SubmitHandler<formValues> = (formData) => {
    mutation.mutate(formData, {
      onSuccess: () => {
        router.push("/");
      },
      onError: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Card className="w-full px-8 sm:max-w-md py-8">
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            {...register("email")}
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            {...register("password")}
            placeholder="••••••••"
            required
          />
          <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
            LogIn
          </button>
        </form>
      </Card>
    </div>
  );
}
