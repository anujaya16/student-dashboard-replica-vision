
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import StudentSidebar from "@/components/StudentSidebar";
import StudentHeader from "@/components/StudentHeader";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Schedule = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<any[]>([]);

  // Mock events data
  const mockEvents = {
    "2025-05-19": [
      { id: 1, title: "Web Development", time: "09:00 AM - 10:30 AM", type: "class", location: "Room 301" },
      { id: 2, title: "Data Science Exam", time: "01:00 PM - 03:00 PM", type: "exam", location: "Exam Hall 2" },
    ],
    "2025-05-20": [
      { id: 3, title: "Mathematics", time: "11:00 AM - 12:30 PM", type: "class", location: "Room 205" },
      { id: 4, title: "Study Group", time: "04:30 PM - 06:00 PM", type: "meeting", location: "Library" },
    ],
    "2025-05-21": [
      { id: 5, title: "Psychology", time: "10:00 AM - 11:30 AM", type: "class", location: "Room 102" },
    ],
    "2025-05-22": [
      { id: 6, title: "Computer Science", time: "09:00 AM - 10:30 AM", type: "class", location: "Room 304" },
      { id: 7, title: "Project Presentation", time: "02:00 PM - 04:00 PM", type: "meeting", location: "Conference Room" },
    ],
    "2025-05-24": [
      { id: 8, title: "Final Exams", time: "10:00 AM - 12:00 PM", type: "exam", location: "Main Hall" },
    ],
  };

  // Format date to YYYY-MM-DD for event lookup
  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Update events when date changes
  useEffect(() => {
    const dateKey = formatDateKey(date);
    setEvents(mockEvents[dateKey as keyof typeof mockEvents] || []);
  }, [date]);

  useEffect(() => {
    document.title = "Schedule | Student Dashboard";
  }, []);

  // Helper function to check if a date has events
  const hasEvents = (day: Date) => {
    const dateKey = formatDateKey(day);
    return mockEvents[dateKey as keyof typeof mockEvents]?.length > 0;
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "exam":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "meeting":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  // Format readable date string
  const formatDateString = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <SidebarProvider collapsedWidth={56}>
      <div className="flex h-screen w-full">
        <StudentSidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <StudentHeader />
          
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">My Schedule</h1>
              
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mb-6">
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendar</CardTitle>
                      <CardDescription>Select a date to view your schedule</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => newDate && setDate(newDate)}
                        className="rounded-md border"
                        modifiers={{
                          hasEvents: (day) => hasEvents(day),
                        }}
                        modifiersStyles={{
                          hasEvents: { backgroundColor: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))", fontWeight: "bold" },
                        }}
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Events for {formatDateString(date)}</CardTitle>
                        <CardDescription>Your classes, exams and meetings</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            const prevDay = new Date(date);
                            prevDay.setDate(prevDay.getDate() - 1);
                            setDate(prevDay);
                          }}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            const nextDay = new Date(date);
                            nextDay.setDate(nextDay.getDate() + 1);
                            setDate(nextDay);
                          }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {events.length === 0 ? (
                        <div className="text-center py-20">
                          <p className="text-muted-foreground">No events scheduled for this day</p>
                          <Button variant="outline" className="mt-4">Add Event</Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {events.map((event) => (
                            <div 
                              key={event.id} 
                              className="border rounded-lg p-4 transition-all hover:shadow-md"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium text-lg">{event.title}</h3>
                                  <div className="flex flex-col sm:flex-row sm:space-x-4 text-sm">
                                    <span className="text-muted-foreground">{event.time}</span>
                                    <span className="text-muted-foreground">{event.location}</span>
                                  </div>
                                </div>
                                <Badge
                                  className={cn(getEventTypeColor(event.type))}
                                >
                                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Schedule;
