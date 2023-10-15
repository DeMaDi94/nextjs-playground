"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import NavMenu from "../NavMenu/NavMenu";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex border-b justify-between">
      <div className="flex p-4 h-16 items-center justify-center">
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Beispiel
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Beispiel
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Beispiel
          </Link>
        </nav>
      </div>
      <div className="flex items-center justify-center mr-5 ">
        <NavMenu />
      </div>
    </div>
  );
}
export default Navbar;
