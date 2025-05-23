
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell,
  Search,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StudentHeader() {
  const { state } = useSidebar();
  
  return (
    <header className="sticky top-0 z-10 bg-slate-900 border-b border-slate-700/30 h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="text-slate-400 hover:text-white" />
        <h1 className="text-xl font-bold text-white hidden md:block">Student Performance</h1>
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full h-9 w-[250px] bg-slate-800 border border-slate-700/30 pl-8 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Avatar className="h-8 w-8 border border-slate-700/30">
                <AvatarImage src="/placeholder.svg" alt="Student" />
                <AvatarFallback className="bg-slate-800 text-slate-300">JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-sm font-medium text-white">
                <span className="flex items-center">
                  John Doe <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-slate-800 border-slate-700/30 text-slate-300">
            <DropdownMenuLabel className="text-slate-300">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-700/30" />
            <DropdownMenuItem className="hover:bg-slate-700 hover:text-white">Profile</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-700 hover:text-white">Settings</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-slate-700 hover:text-white">Support</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate-700/30" />
            <DropdownMenuItem className="hover:bg-slate-700 hover:text-white">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default StudentHeader;
