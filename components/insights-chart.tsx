"use client"

import { Line, Bar, XAxis, YAxis, CartesianGrid, ComposedChart, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { weeklyData } from "@/lib/data"
import { MessageCircle } from 'lucide-react'

export function InsightsChart() {
  return (
    <Card className="col-span-2">
<CardHeader>
  <div className="flex flex-row items-center space-x-2 text-gray-500">
  <MessageCircle className="w-4 h-4 fill-gray-500" />
    <CardTitle>Consultations</CardTitle>
  </div>
</CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consultations" fill="#eab308" opacity={0.3} />
              <Line type="monotone" dataKey="incoming" stroke="#6366f1" />
              <Line type="monotone" dataKey="answered" stroke="#10b981" />
              <Line type="monotone" dataKey="expertsOnline" stroke="#f97316" strokeDasharray="3 3" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <hr className="my-4 border-gray-300" />
        {/* Legend Below the Chart */}
        <div className="flex justify-start gap-10 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-2 inline-block bg-[#6366f1] rounded"></span>
            <span>Incoming</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-2 inline-block bg-[#10b981] rounded"></span>
            <span>Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-2 inline-block bg-[#f97316] rounded"></span>
            <span>Experts Online</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

