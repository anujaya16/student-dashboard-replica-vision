import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  MoreHorizontal
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Assignments = () => {
  interface Assignment {
    id: string;
    title: string;
    course: string;
    dueDate: string;
    status: "completed" | "pending" | "overdue";
    grade?: string;
  }

  // Mock assignments data
  const assignments: Assignment[] = [
    { id: "1", title: "Final Project Submission", course: "Web Development", dueDate: "May 21, 2025", status: "pending" },
    { id: "2", title: "Quiz on Linear Algebra", course: "Mathematics", dueDate: "May 23, 2025", status: "pending" },
    { id: "3", title: "Research Paper Draft", course: "Psychology", dueDate: "May 18, 2025", status: "overdue" },
    { id: "4", title: "Group Discussion Summary", course: "Communication Skills", dueDate: "May 15, 2025", status: "completed", grade: "A" },
    { id: "5", title: "Programming Assignment", course: "Python Programming", dueDate: "May 10, 2025", status: "completed", grade: "B+" },
    { id: "6", title: "Case Study Analysis", course: "Business Management", dueDate: "May 5, 2025", status: "completed", grade: "A-" },
  ];
  
  const pendingAssignments = assignments.filter(a => a.status === "pending" || a.status === "overdue");
  const completedAssignments = assignments.filter(a => a.status === "completed");

  const getStatusIcon = (status: Assignment["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: Assignment["status"]) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="bg-green-100 text-green-800">Completed</Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800">Pending</Badge>;
      case "overdue":
        return <Badge variant="outline" className="bg-red-100 text-red-800">Overdue</Badge>;
    }
  };

  useEffect(() => {
    document.title = "Assignments | Student Dashboard";
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-slate-900">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 bg-slate-900 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-slate-900">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6 text-white">My Assignments</h1>
              
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="mt-4">
                  <div className="bg-slate-800 rounded-lg border border-slate-700">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Assignment</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingAssignments.map((assignment) => (
                          <TableRow key={assignment.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                                {assignment.title}
                              </div>
                            </TableCell>
                            <TableCell>{assignment.course}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end">
                                <Button size="sm">Submit</Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Download Materials</DropdownMenuItem>
                                    <DropdownMenuItem>Contact Instructor</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed" className="mt-4">
                  <div className="bg-slate-800 rounded-lg border border-slate-700">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Assignment</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {completedAssignments.map((assignment) => (
                          <TableRow key={assignment.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                                {assignment.title}
                              </div>
                            </TableCell>
                            <TableCell>{assignment.course}</TableCell>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{assignment.grade}</Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end">
                                <Button variant="outline" size="sm">View</Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Feedback</DropdownMenuItem>
                                    <DropdownMenuItem>Download Submission</DropdownMenuItem>
                                    <DropdownMenuItem>View Rubric</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Assignments;
