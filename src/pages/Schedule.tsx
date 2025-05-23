import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import { DashboardCard } from "@/components/DashboardCard";
import { ScheduleView } from "@/components/ScheduleView";
import { 
  CalendarDays,
  BookOpen,
  AlertTriangle,
  Clock,
} from "lucide-react";

export function Schedule() {
  // Mock schedule data
  const scheduleItems = [
    { id: "1", title: "Web Development", time: "09:00 AM - 10:30 AM", type: "class" as const, location: "Room 301" },
    { id: "2", title: "Data Science Exam", time: "01:00 PM - 03:00 PM", type: "exam" as const, location: "Exam Hall 2" },
    { id: "3", title: "Study Group", time: "04:30 PM - 06:00 PM", type: "meeting" as const, location: "Library" },
    { id: "4", title: "Project Presentation", time: "11:00 AM - 12:30 PM", type: "class" as const, location: "Room 202" },
    { id: "5", title: "Office Hours", time: "02:30 PM - 04:00 PM", type: "meeting" as const, location: "Faculty Building" },
  ];

  // Summary cards data
  const scheduleSummary = [
    { title: "Today's Classes", value: "3", subtitle: "2 remaining", icon: <BookOpen /> },
    { title: "Upcoming Assignments", value: "4", subtitle: "1 due tomorrow", icon: <AlertTriangle /> },
    { title: "Study Hours", value: "6.5", subtitle: "Target: 8 hours", icon: <Clock /> },
    { title: "Week Events", value: "12", subtitle: "+2 from last week", icon: <CalendarDays /> },
  ];

  useEffect(() => {
    document.title = "Schedule | EduTrack";
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background text-foreground">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-1">Schedule</h1>
                <p className="text-muted-foreground text-sm">Manage your daily and weekly schedule</p>
              </div>
              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {scheduleSummary.map((item, index) => (
                  <DashboardCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    value={item.value}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
                <div className="bg-card border border-card rounded-lg overflow-hidden">
                  <ScheduleView 
                    date={new Date()} 
                    items={scheduleItems}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Schedule;
