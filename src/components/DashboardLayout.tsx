
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader 
            walletConnected={walletConnected} 
            setWalletConnected={setWalletConnected} 
          />
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
