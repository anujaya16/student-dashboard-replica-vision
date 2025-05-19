
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  id: string;
  title: string;
  time: string;
  type: "class" | "exam" | "meeting";
  location: string;
}

interface ScheduleViewProps {
  date: Date;
  items: ScheduleItem[];
}

export function ScheduleView({ date, items }: ScheduleViewProps) {
  // Format the date as "Day, Month Date"
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const getItemBadgeColor = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "class":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "exam":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "meeting":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    }
  };

  const getItemIcon = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "class":
        return "📚";
      case "exam":
        return "📝";
      case "meeting":
        return "👥";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Calendar className="mr-2 h-5 w-5" /> 
          <span>Schedule for {formattedDate}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            No events scheduled for today
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start border-l-4 border-primary p-3 rounded-r-lg bg-muted/30"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{item.title}</h3>
                    <Badge variant="outline" className={cn(getItemBadgeColor(item.type))}>
                      <span className="flex items-center gap-1">
                        {getItemIcon(item.type)} {item.type}
                      </span>
                    </Badge>
                  </div>
                  <div className="text-sm mt-1 text-muted-foreground">
                    {item.time} • {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ScheduleView;
