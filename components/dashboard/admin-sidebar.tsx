"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { BarChartIcon, FileIcon, FilmIcon, HomeIcon, MessageSquareIcon, SettingsIcon, UserIcon, UsersIcon } from "lucide-react";
import { Sidebar,SidebarContent,SidebarFooter,SidebarGroup,SidebarGroupLabel,SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Logo } from "../shared/logo";
import { ModeToggle } from "../shared/mode-toggle";
import { cn } from "@/lib/utils";

const MENU_ITEMS=[
                { title: "Dashboard", href: "/dashboard", icon:HomeIcon,exact:true },
                { title: "Movies", href: "/dashboard/movies", icon:FileIcon },
                { title: "Users", href: "/dashboard/users", icon:UsersIcon },
                { title: "Reviews", href: "/dashboard/reviews", icon:MessageSquareIcon },
                { title: "Analytics", href: "/dashboard/analytics", icon:BarChartIcon },
                { title: "Settings", href: "/dashboard/settings", icon:SettingsIcon },
            ];

const ACCOUNT_MENU_ITEMS=[
                { title: "Profile", href: "/dashboard/profile", icon:UserIcon },
                { title: "Public Site", href: "/", icon:FilmIcon },
            ];

export default function AdminSidebar() {
    const pathname = usePathname();
    const isActivePage = (item:(typeof MENU_ITEMS[number])) => {
        if (item.exact) {
            return item.href === pathname;
        }
        if(item.href === "/"){
            return pathname === "/";
        }
        return pathname.startsWith(item.href);
    };

  return (
    <Sidebar>
        <SidebarHeader className="bg-primary/5">
        <div className="flex items-center p-2">
            <Logo />
            <h2 className="ml-2 text-xl font-bold">CineScope</h2>
            <div className="ml-auto flex item-center">
                <ModeToggle />
            </div>
        </div>
        </SidebarHeader>
        <SidebarContent className="bg-primary/5 gap-2">
            {/* Main Menu*/}
            <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu className="gap-1">
                {MENU_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className={cn(
                        isActivePage(item) ? "bg-primary text-white font-medium hover:bg-primary/90 hover:text-white" 
                            : "hover:bg-primary/10",
                        )} asChild>
                        <Link href={item.href}>
                            <item.icon className="[&>svg]:size-4"/>
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                ))}
            </SidebarMenu>
            </SidebarGroup>
            {/* Account Menu*/}
            <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu className="gap-1">
                {ACCOUNT_MENU_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className={cn(
                        isActivePage(item) ? "bg-primary text-white font-medium hover:bg-primary/90 hover:text-white" 
                            : "hover:bg-primary/10",
                        )} asChild>
                        <Link href={item.href}>
                            <item.icon className="[&>svg]:size-4"/>
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                ))}
           </SidebarMenu> 
            </SidebarGroup>

        </SidebarContent>
        <SidebarFooter className="bg-primary/5">
            
        </SidebarFooter>
    </Sidebar>
  );
}