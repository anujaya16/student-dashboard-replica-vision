
import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import { DashboardCard } from "@/components/DashboardCard";
import { CourseCard } from "@/components/CourseCard";
import { AssignmentList } from "@/components/AssignmentList";
import { ScheduleView } from "@/components/ScheduleView";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  CalendarDays 
} from "lucide-react";

const Index = () => {
  // Mock assignments data
  const assignments = [
    { id: "1", title: "Final Project Submission", course: "Web Development", dueDate: "May 21, 2025", status: "pending" as const },
    { id: "2", title: "Quiz on Linear Algebra", course: "Mathematics", dueDate: "May 23, 2025", status: "pending" as const },
    { id: "3", title: "Research Paper Draft", course: "Psychology", dueDate: "May 18, 2025", status: "overdue" as const },
    { id: "4", title: "Group Discussion Summary", course: "Communication Skills", dueDate: "May 15, 2025", status: "completed" as const },
  ];

  // Mock schedule data
  const scheduleItems = [
    { id: "1", title: "Web Development", time: "09:00 AM - 10:30 AM", type: "class" as const, location: "Room 301" },
    { id: "2", title: "Data Science Exam", time: "01:00 PM - 03:00 PM", type: "exam" as const, location: "Exam Hall 2" },
    { id: "3", title: "Study Group", time: "04:30 PM - 06:00 PM", type: "meeting" as const, location: "Library" },
  ];

  // Mock course data
  const courses = [
    { id: "1", title: "Introduction to Web Development", instructor: "Prof. Smith", coverImage: "https://source.unsplash.com/random/300x200?code", progress: 75, category: "Computer Science" },
    { id: "2", title: "Data Science Fundamentals", instructor: "Dr. Johnson", coverImage: "https://source.unsplash.com/random/300x200?data", progress: 45, category: "Data Science" },
    { id: "3", title: "Psychology 101", instructor: "Prof. Williams", coverImage: "https://source.unsplash.com/random/300x200?brain", progress: 90, category: "Psychology" },
  ];

  useEffect(() => {
    document.title = "Student Dashboard";
  }, []);

  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="flex h-screen w-full">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <DashboardCard title="Enrolled Courses" icon={<BookOpen />}>
                  <div className="text-3xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">2 in progress</p>
                </DashboardCard>
                
                <DashboardCard title="Learning Hours" icon={<GraduationCap />}>
                  <div className="text-3xl font-bold">124</div>
                  <p className="text-xs text-muted-foreground">+12 this week</p>
                </DashboardCard>
                
                <DashboardCard title="Certificates" icon={<Award />}>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">1 pending</p>
                </DashboardCard>
                
                <DashboardCard title="Upcoming Exams" icon={<CalendarDays />}>
                  <div className="text-3xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next in 3 days</p>
                </DashboardCard>
              </div>
              
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <AssignmentList assignments={assignments} />
                </div>
              </div>
              
              <div className="mb-6">
                <ScheduleView 
                  date={new Date()} 
                  items={scheduleItems}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
