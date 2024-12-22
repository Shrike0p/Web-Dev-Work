"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { compareData } from "@/lib/data"

export function ComparisonChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={compareData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="consultations" fill="#22c55e" />
              <Bar dataKey="orders" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-center  gap-10 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-2 inline-block bg-[#22c55e] rounded"></span>
            <span>Consultations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-2 inline-block bg-[#0ea5e9] rounded"></span>
            <span>Orders Closed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
