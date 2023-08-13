/** @format */

"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
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
    <button
      className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={async () => await signOut()}
    >
      Logout
    </button>
  );
}
