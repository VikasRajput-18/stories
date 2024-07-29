"use client";
import * as React from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-0">
          <Image
            src="https://attic.sh/ceabab57xr1e1i881t9h70dyscaf"
            alt="user"
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="cursor-pointer px-2 py-1 hover:bg-primary-foreground">
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500 cursor-pointer px-2 py-1 hover:bg-primary-foreground">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
