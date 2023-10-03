"use client";
import getCreateUserMutation from "@/api/UserManagement/getCreateUserMutation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Plus from "../Icons/Plus";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type CreateUserForm = {
  password: string;
  email: string;
};

function UserCreateModal() {
  const queryClient = useQueryClient();
  const createUserMutation = useMutation(getCreateUserMutation(queryClient));

  const { register, handleSubmit } = useForm<CreateUserForm>();

  const [open, setOpen] = useState(false);
  const onSubmit: SubmitHandler<CreateUserForm> = (data) => {
    createUserMutation.mutate(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="flex gap-2"
          onClick={() => setOpen(true)}
        >
          <Plus className="h-5 w-5" /> Erstellen
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Einen neuen Benutzer anlegen</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" {...register("email")} />
          <Label htmlFor="password">Passwort</Label>
          <Input type="password" {...register("password")} />
          <div className="flex w-full">
            <Button variant={"outline"} className="ms-auto" type="submit">
              Erstellen
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UserCreateModal;
