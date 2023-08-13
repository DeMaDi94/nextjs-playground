/** @format */

"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { HtmlHTMLAttributes } from "react";
import { Button } from "./ui/button";

export default function LogoutButton(
  props: HtmlHTMLAttributes<HTMLButtonElement>,
) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    console.log(error);
    if (!error) {
      router.push("/login");
    }
  };

  return (
    <Button onClick={async () => await signOut()} {...props} variant="outline">
      Logout
    </Button>
  );
}
