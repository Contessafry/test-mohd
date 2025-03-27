"use client";
import Link from "next/link";
import { Bell, ChevronDown, CircleUser, Search, User } from "lucide-react";

import { Button } from "./UI/button";
import { Input } from "./UI/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./UI/dropdown-menu";
import { IconSearchContent } from "./UI/icons/IconSearchContent";

export function Navbar() {
  return (
    <div className="flex h-20 w-full items-center justify-between">
      {/* Logo */}
      <div className="pl-10 bg-primary h-full flex items-center min-w-[336px]">
        <Link href="/" className="flex gap-2.5 items-center justify-center">
          <span className="text-[32px] font-bold font-soehne_breit text-white">mohd</span>
          <span className=" rounded-full bg-destructive px-3 py-1 align-middle font-bold  text-sm mt-2  text-white">Pro</span>
        </Link>
      </div>

      {/* Search */}
      <div className="relative w-full  flex justify-end bg-linear-to-r from-secondary   to-white   h-full">
        <Search className="absolute left-8 top-1/2 h-6 w-6 -translate-y-1/2 transform text-primary " />
        <Input type="search" placeholder="Search for products" className="h-full w-full flex  border-none  shadow-none placeholder:text-secondary-t pl-20 text-sm focus-visible:ring-0" />
      </div>

      {/* Browse by category */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="transparent" className="ml-4 gap-3 flex items-center border-r cursor-pointer">
            <span className="text-sm">Browse by category</span>
            <IconSearchContent color="currentColor" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>My Projects</DropdownMenuItem>
          <DropdownMenuItem>Create New Project</DropdownMenuItem>
          <DropdownMenuItem>Project Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center mr-10 gap-8">
        {/* Projects dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="ml-4 flex items-center gap-1">
              <span className="text-sm">Projects</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>My Projects</DropdownMenuItem>
            <DropdownMenuItem>Create New Project</DropdownMenuItem>
            <DropdownMenuItem>Project Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notification */}
        <div className="flex items-center gap-5">
          <Button variant="transparent" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User profile */}
          <Button variant="transparent" size="icon">
            <CircleUser className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
