
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
  CalendarDays,
  Users,
  TrendingUp,
  AlertTriangle
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
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-900 text-white">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-slate-900">
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-1">Overview</h1>
                <p className="text-slate-400 text-sm">Welcome to your student performance dashboard</p>
              </div>
              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <DashboardCard 
                  title="Enrolled Courses" 
                  icon={<BookOpen />}
                  value="7"
                  subtitle="2 in progress"
                />
                
                <DashboardCard 
                  title="Learning Hours" 
                  icon={<GraduationCap />}
                  value="124"
                  subtitle="+12 this week"
                  trend={{
                    value: "+4.5% from last month",
                    positive: true
                  }}
                />
                
                <DashboardCard 
                  title="Certificates" 
                  icon={<Award />}
                  value="3"
                  subtitle="1 pending"
                />
                
                <DashboardCard 
                  title="Upcoming Exams" 
                  icon={<CalendarDays />}
                  value="2"
                  subtitle="Next in 3 days"
                />
              </div>
              
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-semibold mb-4 text-white">Continue Learning</h2>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {courses.map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">Upcoming Assignments</h2>
                  <div className="bg-slate-800/80 border border-slate-700/30 rounded-lg overflow-hidden">
                    <AssignmentList assignments={assignments} />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-white">Today's Schedule</h2>
                <div className="bg-slate-800/80 border border-slate-700/30 rounded-lg overflow-hidden">
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
};

export default Index;
