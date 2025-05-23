
import { NavLink, useLocation } from "react-router-dom";
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
import { 
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Calendar,
  User,
  Settings
} from "lucide-react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Courses", url: "/courses", icon: BookOpen },
  { title: "Assignments", url: "/assignments", icon: ClipboardList },
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function StudentSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Helper function to determine if a group should be expanded
  const isGroupExpanded = (paths: string[]) => 
    paths.some(path => currentPath.startsWith(path));

  // Helper for active route styling
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-slate-800 text-primary font-medium" 
      : "hover:bg-slate-800/50 text-slate-300 transition-colors duration-200";

  return (
    <Sidebar
      className="border-r border-slate-700/30 transition-all duration-300 bg-slate-900 text-white w-64 data-[state=collapsed]:w-14"
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end" />

      <div className="flex items-center justify-center py-4">
        {state !== "collapsed" ? (
          <h2 className="text-xl font-bold text-primary">EduTrack</h2>
        ) : (
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            E
          </div>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400">Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`flex items-center p-2 rounded-md ${getNavClass}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {state !== "collapsed" && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <div className="mt-auto p-4 border-t border-slate-700/30 text-xs text-slate-500">
        <p>EduTrack v1.0</p>
      </div>
    </Sidebar>
  );
}

export default StudentSidebar;
