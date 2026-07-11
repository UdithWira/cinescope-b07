import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {UserNav} from "@/components/dashboard/user-nav";

export default async function AdminHeader(){
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if(!session){
        redirect("/login");
    }

    

    const handleLogout = async () => {
        "use server";
        await auth.api.signOut({
            headers: await headers()
        });
        redirect("/login");
    }

    return (
        <header className="sticky top-0 z-50 border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <SidebarTrigger className="cursor-pointer" />
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                </div>
                {/*User menu */}
                <UserNav handleLogout={handleLogout} user={session.user} />
            </div>
        </header>
    );
}