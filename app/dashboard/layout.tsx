import { SidebarProvider } from "@/components/ui/sidebar";
import AdminHeader from "@/components/dashboard/admin-header";
import AdminSidebar  from "@/components/dashboard/admin-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex flex-col w-full">
        <AdminHeader />
        {children}
      </main>

    </SidebarProvider>     
   );
 }