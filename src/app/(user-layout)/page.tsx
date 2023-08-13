/** @format */

import UserTable from "@/components/UserTable/UserTable";

export const dynamic = "force-dynamic";

export default async function Index() {
  return (
    <div className="grid grid-cols-3 pt-10">
      <UserTable />
    </div>
  );
}
