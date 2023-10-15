"use client";
import getUsersQuery from "@/api/UserManagement/getUsersQuery";
import { useSuspenseQuery } from "@tanstack/react-query";
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
  const { data: users } = useSuspenseQuery(getUsersQuery());

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
            <TableHead>Vorname</TableHead>
            <TableHead>Nachname</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default UserTable;
