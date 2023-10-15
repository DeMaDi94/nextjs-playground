import getLogoutUserMutation from "@/api/UserManagement/getUserLogoutMutation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Cross from "../Icons/Cross";
import Hamburger from "../Icons/Hamburger";
import { Button } from "../ui/button";

function NavMenu() {
  const [open, setOpen] = useState(false);
  const { mutate } = useMutation(getLogoutUserMutation());
  const router = useRouter();

  const logout = () => {
    mutate(undefined, {
      onSuccess: (data) => {
        toast.success(data.message);
        router.push("/login");
      },
    });
  };

  return (
    <DropdownMenu open={open} onOpenChange={(value) => setOpen(value)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {open ? (
            <Cross className="w-6 h-6" />
          ) : (
            <Hamburger className="w-6 h-6" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border shadow bg-white mt-4 mr-4 rounded py-3 px-2 flex flex-col gap-1">
        <DropdownMenuLabel className="px-2 py-1 border-b">
          Einstellungen
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => router.push("users")}
          className="hover:outline-none hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
        >
          Benutzer
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={logout}
          className="hover:outline-none hover:cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
        >
          Abmelden
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavMenu;
