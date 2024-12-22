import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: React.ReactNode; // Updated from 'string' to 'React.ReactNode'
  value: string;
  change: number;
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, change, icon }: MetricCardProps) {
  const isPositive = change > 0;

  return (
    <Card>
      <CardHeader className="flex items-start space-y-0 pb-2 gap-2">
        {icon}
        <CardTitle className="text-xs font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs">
          {isPositive ? (
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDownIcon className="h-4 w-4 text-red-500" />
          )}
          <span
            className={cn(
              "ml-1",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {Math.abs(change)}% {isPositive ? "increase" : "decrease"}
          </span>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}
