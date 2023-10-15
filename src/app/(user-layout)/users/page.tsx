import UserTable from "@/components/UserTable";

export function Users() {
  return (
    <div className="grid xl:grid-cols-5 p-10">
      <div className="xl:col-start-2 xl:col-span-3">
        <UserTable />
      </div>
    </div>
  );
}

export default Users;
