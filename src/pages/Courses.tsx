import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import { CourseCard } from "@/components/CourseCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Courses = () => {
  // Mock course data
  const allCourses = [
    {
      id: "1",
      title: "Mathematics for Technology I",
      description: "Fundamentals of mathematics for computer science",
      instructor: "Dr. Rasika Rajapaksha",
      students: 32,
      credits: 3,
      duration: "16 weeks",
      category: "Computer Science",
      level: "Beginner",
      progress: 75,
      coverImage: "https://source.unsplash.com/random/300x200?math"
    },
    {
      id: "2",
      title: "Advanced Mathematics",
      description: "Calculus, linear algebra and differential equations",
      instructor: "Prof. N. G. J. Dias",
      students: 28,
      credits: 4,
      duration: "14 weeks",
      category: "Computer Science",
      level: "Advanced",
      progress: 100,
      coverImage: "https://source.unsplash.com/random/300x200?calculus"
    },
    {
      id: "3",
      title: "Networking I",
      description: "Networking for computer science",
      instructor: "Mr. L. Akash Tharuka",
      students: 25,
      credits: 4,
      duration: "15 weeks",
      category: "Computer Science",
      level: "Intermediate",
      progress: 45,
      coverImage: "https://source.unsplash.com/random/300x200?network"
    },
  ];
  
  const inProgressCourses = allCourses.filter(course => course.progress > 0 && course.progress < 100);
  const completedCourses = allCourses.filter(course => course.progress === 100);

  useEffect(() => {
    document.title = "Courses | Student Dashboard";
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-900 text-white">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-slate-900">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">My Courses</h1>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All Courses</TabsTrigger>
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                
                  <TabsContent value="all" className="mt-0">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {allCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="in-progress" className="mt-0">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {inProgressCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="completed" className="mt-0">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {completedCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="flex w-full md:w-auto">
                  <div className="relative flex-1 md:flex-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Search courses..." 
                      className="pl-8 w-full md:w-[250px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Courses;
