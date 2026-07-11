"use client"
import Link from "next/link";
import { UserIcon,SettingsIcon,LogOutIcon } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"

interface UserNavProps {
  handleLogout: () => Promise<void>;
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string|null,
    createdAt: Date;
    updatedAt: Date;

  }



}


export function UserNav({user, handleLogout}: UserNavProps) {
  
    return (
        <DropdownMenu>
  <DropdownMenuTrigger className="focus-visible:right-0" asChild>
    
     <Avatar className="h-10 w-10 border-2 border-primary cursor-pointer">
        <AvatarImage
          src={user.image || undefined}
          alt="User Avatar"
        />
        <AvatarFallback>ER</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56 ring-0 border border-border" align="end" forceMount>
    <DropdownMenuLabel className="font-normal py-1.5 px-2">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium leading-none text-nowrap truncate text-black">
          {user.name || "Guest Name"}
        </p>
        <p className="text-xs text-muted-foreground leading-none">
          {user.email || "No Email"}
        </p>
      </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />

      <DropdownMenuItem className="cursor-pointer px-2 py-1.5" asChild>
        <Link href="/dashboard/profile">
          <UserIcon className="me-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer" asChild>
        <Link href="/dashboard/settings">
          <SettingsIcon className="me-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
        </Link>
      </DropdownMenuItem>

    <DropdownMenuSeparator />
      <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>

          <LogOutIcon className="me-2 h-4 w-4" />
          <span>Log Out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>

      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    );
}
