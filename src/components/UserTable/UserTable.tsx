"use client";
import UserCreateModal from "../UserCreateModal";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function UserTable() {
  // const { data: users, fetchStatus } = useSuspenseQuery(getUsersQuery());
  // if (fetchStatus === "fetching") return <></>;

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
          {/* {users?.map((user) => (
            <TableRow>
              <TableCell className="font-medium">{user.email}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </Card>
  );
}

export default UserTable;
