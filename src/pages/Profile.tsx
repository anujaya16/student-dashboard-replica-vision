
import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap,
  UserCheck,
  Award
} from "lucide-react";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Student Dashboard";
  }, []);

  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="flex h-screen w-full">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">My Profile</h1>
              
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
                <div className="lg:col-span-1">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <Avatar className="h-32 w-32">
                          <AvatarImage src="/placeholder.svg" alt="Student Profile" />
                          <AvatarFallback className="text-4xl">JD</AvatarFallback>
                        </Avatar>
                        <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
                        <p className="text-muted-foreground">Student ID: STU-2023-001</p>
                        <Badge className="mt-3">Computer Science</Badge>
                        <Button className="mt-6 w-full">Edit Profile</Button>
                      </div>
                      
                      <div className="mt-8 space-y-4">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">john.doe@university.edu</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">(555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">123 Campus Street, University City</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">Enrolled: September 2023</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Tabs defaultValue="academic" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="academic">Academic</TabsTrigger>
                      <TabsTrigger value="achievements">Achievements</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="academic">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <GraduationCap className="mr-2 h-5 w-5" />
                            Academic Information
                          </CardTitle>
                          <CardDescription>Your academic record and progress</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <h3 className="font-medium mb-2">Current Semester</h3>
                            <div className="text-sm">Spring 2025 - Year 2</div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2">GPA</h3>
                            <div className="flex items-center space-x-4">
                              <div className="text-2xl font-bold">3.7</div>
                              <Progress value={85} className="h-2 flex-1" />
                              <div>4.0</div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2">Credits</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Earned</p>
                                <p className="font-medium">45</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Required</p>
                                <p className="font-medium">120</p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2">Academic Standing</h3>
                            <Badge variant="outline" className="bg-green-100 text-green-800">Good Standing</Badge>
                          </div>
                          
                          <div>
                            <h3 className="font-medium mb-2">Program Progress</h3>
                            <div className="flex items-center space-x-4 mb-2">
                              <div className="text-sm">37.5%</div>
                              <Progress value={37.5} className="h-2 flex-1" />
                            </div>
                            <p className="text-sm text-muted-foreground">Expected graduation: May 2027</p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="achievements">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Award className="mr-2 h-5 w-5" />
                            Achievements & Certificates
                          </CardTitle>
                          <CardDescription>Your academic achievements and earned certificates</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">Dean's List</h3>
                                  <p className="text-sm text-muted-foreground">Fall 2024 Semester</p>
                                </div>
                                <Badge>Academic</Badge>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">Web Development Excellence</h3>
                                  <p className="text-sm text-muted-foreground">Certificate - April 2025</p>
                                </div>
                                <Badge>Certificate</Badge>
                              </div>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">Programming Competition - 2nd Place</h3>
                                  <p className="text-sm text-muted-foreground">University Hackathon - January 2025</p>
                                </div>
                                <Badge>Competition</Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="settings">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <UserCheck className="mr-2 h-5 w-5" />
                            Account Settings
                          </CardTitle>
                          <CardDescription>Manage your account preferences and settings</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Settings content would go here...</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
