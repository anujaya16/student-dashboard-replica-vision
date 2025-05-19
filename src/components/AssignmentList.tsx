
import { 
  CheckCircle,
  Clock,
  AlertCircle 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: "completed" | "pending" | "overdue";
}

interface AssignmentListProps {
  assignments: Assignment[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
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

  const getStatusText = (status: Assignment["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "pending":
        return "Pending";
      case "overdue":
        return "Overdue";
    }
  };

  const getStatusColor = (status: Assignment["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-amber-100 text-amber-800";
      case "overdue":
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No assignments due
            </div>
          ) : (
            assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{assignment.title}</h3>
                  <div className="text-xs text-muted-foreground">
                    {assignment.course}
                  </div>
                  <div className="flex items-center mt-2 text-xs">
                    <Badge variant="outline" className={cn("text-xs", getStatusColor(assignment.status))}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(assignment.status)}
                        {getStatusText(assignment.status)}
                      </span>
                    </Badge>
                    <span className="ml-2 text-muted-foreground">
                      Due: {assignment.dueDate}
                    </span>
                  </div>
                </div>
                <Button size="sm" variant={assignment.status === "completed" ? "outline" : "default"}>
                  {assignment.status === "completed" ? "View" : "Submit"}
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default AssignmentList;
