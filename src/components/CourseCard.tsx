
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  coverImage: string;
  progress: number;
  category: string;
}

export function CourseCard({
  id,
  title,
  instructor,
  coverImage,
  progress,
  category
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-200 bg-slate-800/80 border-slate-700/30 text-white">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2 bg-primary/80 text-white hover:bg-primary">{category}</Badge>
      </div>
      <CardHeader className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 text-white">{title}</h3>
        <p className="text-sm text-slate-400">by {instructor}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-slate-400">Progress</span>
          <span className="font-medium text-white">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-slate-700" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/80 text-white" size="sm">Continue Learning</Button>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
