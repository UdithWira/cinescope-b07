"use client"

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import {Button} from "@/components/ui/button";

export default function LogoutPage() {
    const router = useRouter();
    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
                onError: (error) => {
                    console.error("Error logging out:", error);
                }
            },
        }
            
        );
    };

    return (
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
             <Button size="lg" onClick={handleLogout}>
                Logout
             </Button>
            </div>
    );
}
