"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

export function DropdownMenubar() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="container w-20 mx-0 xl:hidden grid"
          variant="outline"
        >
          <FaBarsStaggered />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about">About Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/services">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/projects">Projects</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/blog">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/pages">Page</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/register">Contact</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
