"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
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

type FormValues = {
  password: string;
  email: string;
};

function UserCreateModal() {
  const supabase = createClientComponentClient();
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;

    const { error } = await supabase.auth.admin.createUser({
      email,
      password,
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
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
