import AdminHeader from "@/components/dashboard/admin-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
    <div className="min-h-screen flex flex-row">
      <header className="flex-2 bg-green-200 text-black p-4">
        Dashboard side bar
      </header>
      <main className="flex-10 flex flex-col text-black">
        <AdminHeader />
        {children}
      </main>

    </div>     
   );
 }