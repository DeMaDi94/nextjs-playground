/** @format */

import LogoutButton from "@/components/LogoutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
    <div className="w-full flex flex-col items-center">
      logged in
      <LogoutButton />
    </div>
  );
}
