import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, TrendingUpIcon } from "lucide-react";

interface ForecastCardProps {
  className?: string;
}

export function ForecastCard({ className }: ForecastCardProps) {
  return (
    <Card
      className={`rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-6 ${className}`}
    >
     <CardHeader className="flex flex-row items-center gap-2">
  <MessageCircle className="h-4 w-4 fill-white inline-block align-middle" />
  <CardTitle className="text-white text-base ">FORECASTS</CardTitle>
</CardHeader>

      <CardContent className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">+15%</span>
            <TrendingUpIcon className="h-6 w-6" />
          </div>
          <p className="text-sm opacity-90">
            forecasted increase in your sales closed by the end of the current month
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold">+20%</span>
            <TrendingUpIcon className="h-6 w-6" />
          </div>
          <p className="text-sm opacity-90">
            forecasted increase in consultations by the end of the current month
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
