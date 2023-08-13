"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@tanstack/react-query";
import UserCreateModal from "../UserCreateModal";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function UserTable() {
  const supabase = createClientComponentClient();

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const {
        data: { users },
      } = await supabase.auth.admin.listUsers();

      return users;
    },
  });

  return (
    <Card className="col-start-2">
      <div className="p-2 w-full border-b flex">
        <div className="p-2 text-2xl font-bold">Benutzer</div>
        <div className="ms-auto">
          <UserCreateModal />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow>
              <TableCell className="font-medium">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default UserTable;
