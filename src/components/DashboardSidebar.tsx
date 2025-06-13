
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Wallet, 
  TrendingUp, 
  History, 
  Settings,
  Github,
  ExternalLink
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Portfolio", url: "/portfolio", icon: Wallet },
  { title: "Analytics", url: "/analytics", icon: TrendingUp },
  { title: "History", url: "/history", icon: History },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (active: boolean) =>
    active 
      ? "bg-primary/20 text-primary border-r-2 border-primary" 
      : "hover:bg-muted/50 transition-colors";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarContent className="bg-sidebar">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-purple rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg">Sol DeFi</h2>
                <p className="text-xs text-muted-foreground">Investment Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <a 
              href="https://github.com/yourusername/sol-defi-dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
        
        <SidebarTrigger className="m-2 self-end" />
      </SidebarContent>
    </Sidebar>
  );
}
