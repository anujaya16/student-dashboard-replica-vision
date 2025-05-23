
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
  AlertTriangle, 
  CalendarDays,
  Users,
  TrendingUp
} from "lucide-react";

// Import for chart
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock performance data for chart
const performanceData = [
  { month: "Jan", actual: 60, predicted: 65 },
  { month: "Feb", actual: 70, predicted: 68 },
  { month: "Mar", actual: 68, predicted: 72 },
  { month: "Apr", actual: 76, predicted: 77 },
  { month: "May", actual: 80, predicted: 82 },
  { month: "Jun", actual: 85, predicted: 84 },
  { month: "Jul", actual: 81, predicted: 86 },
  { month: "Aug", actual: 0, predicted: 88 }
];

// Mock prediction factors data
const predictionFactors = [
  { factor: "Assignments", value: 85 },
  { factor: "Class Participation", value: 70 },
  { factor: "Previous Grades", value: 75 },
  { factor: "Attendance", value: 90 },
  { factor: "Study Hours", value: 65 }
];

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

  // Recent activities data
  const recentActivities = [
    { 
      id: "1", 
      title: "Math Assessment Complete", 
      description: "Grade 10 midterm prediction model updated",
      time: "1 hour ago",
      status: "success"
    },
    { 
      id: "2", 
      title: "At-Risk Students Identified", 
      description: "5 students flagged for intervention",
      time: "3 hours ago",
      status: "warning"
    }
  ];

  useEffect(() => {
    document.title = "Student Dashboard | EduTrack";
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
                  trend={{
                    value: "+4.5% from last month",
                    positive: true
                  }}
                />
                
                <DashboardCard 
                  title="Learning Hours" 
                  icon={<GraduationCap />}
                  value="124"
                  subtitle="+12 this week"
                  trend={{
                    value: "+1.2% improvement",
                    positive: true
                  }}
                />
                
                <DashboardCard 
                  title="At-Risk Subjects" 
                  icon={<AlertTriangle />}
                  value="2"
                  subtitle="Requiring intervention"
                  trend={{
                    value: "+3.8% from last month",
                    positive: false
                  }}
                />
                
                <DashboardCard 
                  title="Upcoming Exams" 
                  icon={<CalendarDays />}
                  value="3"
                  subtitle="Across all departments"
                />
              </div>
              
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
                <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/30 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-white">Performance Prediction Trend</h2>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart 
                        data={performanceData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis domain={[0, 100]} stroke="#94a3b8" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #475569',
                            borderRadius: '6px',
                            color: '#f8fafc'
                          }}
                        />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="actual" 
                          stroke="#3b82f6" 
                          fillOpacity={1} 
                          fill="url(#colorActual)" 
                          name="Actual"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="predicted" 
                          stroke="#10b981" 
                          fillOpacity={1} 
                          fill="url(#colorPredicted)"
                          name="Predicted" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700/30 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-white">Prediction Factors</h2>
                  <div className="space-y-5">
                    {predictionFactors.map((factor, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">{factor.factor}</span>
                          <span className="text-white">{factor.value}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full w-full relative">
                          <div 
                            className="absolute top-0 left-0 h-full rounded-full bg-primary"
                            style={{ width: `${factor.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">Recent Activities</h2>
                    <a href="#" className="text-primary text-sm hover:underline">View all</a>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/30 rounded-lg overflow-hidden p-4 space-y-5">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className={`rounded-full p-1.5 mt-0.5 ${activity.status === 'success' ? 'bg-emerald-400/20 text-emerald-400' : 'bg-amber-400/20 text-amber-400'}`}>
                          {activity.status === 'success' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg> : 
                            <AlertTriangle className="h-5 w-5" />
                          }
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-white font-medium">{activity.title}</h4>
                          <p className="text-slate-400 text-sm">{activity.description}</p>
                          <p className="text-xs text-slate-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
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
