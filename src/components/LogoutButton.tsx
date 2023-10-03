/** @format */

"use client";

import { HtmlHTMLAttributes } from "react";
import { Button } from "./ui/button";

export default function LogoutButton(
  props: HtmlHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <Button {...props} variant="outline">
      Logout
    </Button>
  );
}
