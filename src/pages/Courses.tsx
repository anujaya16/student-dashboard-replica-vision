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
    { id: "1", title: "Introduction to Web Development", instructor: "Prof. Smith", coverImage: "public\photo.jpeg", progress: 75, category: "Computer Science" },
    { id: "2", title: "Data Science Fundamentals", instructor: "Dr. Johnson", coverImage: "https://source.unsplash.com/random/300x200?data", progress: 45, category: "Data Science" },
    { id: "3", title: "Psychology 101", instructor: "Prof. Williams", coverImage: "https://source.unsplash.com/random/300x200?brain", progress: 90, category: "Psychology" },
    { id: "4", title: "Linear Algebra", instructor: "Dr. Martinez", coverImage: "https://source.unsplash.com/random/300x200?math", progress: 60, category: "Mathematics" },
    { id: "5", title: "Marketing Fundamentals", instructor: "Prof. Garcia", coverImage: "https://source.unsplash.com/random/300x200?marketing", progress: 30, category: "Business" },
    { id: "6", title: "Introduction to Philosophy", instructor: "Dr. Adams", coverImage: "https://source.unsplash.com/random/300x200?philosophy", progress: 15, category: "Humanities" },
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
