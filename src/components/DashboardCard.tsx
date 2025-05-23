
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  className?: string;
  value?: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    positive?: boolean;
  };
  children?: ReactNode;
}

export function DashboardCard({ 
  title, 
  icon, 
  className, 
  value,
  subtitle,
  trend,
  children 
}: DashboardCardProps) {
  return (
    <Card className={cn("overflow-hidden bg-gray-800 border-gray-700 text-white", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
        {icon && <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-700 text-purple-400">{icon}</div>}
      </CardHeader>
      <CardContent>
        {(value || subtitle) ? (
          <div>
            {value && <div className="text-3xl font-bold text-white">{value}</div>}
            {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
            {trend && (
              <div className={cn(
                "text-xs mt-2",
                trend.positive ? "text-emerald-400" : "text-rose-400"
              )}>
                {trend.value}
              </div>
            )}
          </div>
        ) : children}
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
