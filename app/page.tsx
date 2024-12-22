"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquareIcon,
  LineChartIcon,
  MessagesSquareIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  PercentIcon,
  DollarSignIcon,
  TagIcon,
  CoinsIcon,
} from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { InsightsChart } from "@/components/insights-chart";
import { ComparisonChart } from "@/components/comparison-chart";
import { ForecastCard } from "@/components/forecast-chart";
import { OrdersTable } from "@/components/orders-table";
import { metrics } from "@/lib/data";
import { formatCurrency, formatPercent } from "@/lib/utils";
import { useState } from "react";

export default function Dashboard() {
  const [selectedRange, setSelectedRange] = useState("7 days");

  const dropdownOptions = ["7 days", "30 days", "6 months", "1 year"];

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <Tabs defaultValue="summary" className="space-y-4">
        {/* Tabs Navigation */}
        <TabsList nobackground>
          <TabsTrigger
            value="summary"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-gray-700 data-[state=active]:bg-green-100 data-[state=active]:text-black"
          >
            <LineChartIcon className="h-4 w-4" />
            Summary
          </TabsTrigger>
          <TabsTrigger
            value="sales"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-gray-700 data-[state=active]:bg-green-100 data-[state=active]:text-black"
          >
            <MessageSquareIcon className="h-4 w-4" />
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="chats"
            className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-gray-700 data-[state=active]:bg-green-100 data-[state=active]:text-black"
          >
            <MessagesSquareIcon className="h-4 w-4" />
            Chats
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="summary" className="space-y-4">
          {/* At a Glance Section */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">At a glance</h2>
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white text-gray-600"
                onClick={() =>
                  setSelectedRange(
                    (prev) =>
                      dropdownOptions[
                        (dropdownOptions.indexOf(prev) + 1) %
                          dropdownOptions.length
                      ]
                  )
                }
              >
                {selectedRange}
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <MessageSquareIcon className="h-4 w-4 text-gray-500" />
                  CONSULTATIONS
                </div>
              }
              value={metrics.consultations.value.toString()}
              change={metrics.consultations.change}
            />
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <ShoppingCartIcon className="h-4 w-4 text-gray-500" />
                  ORDERS PLACED
                </div>
              }
              value={metrics.orders.value.toString()}
              change={metrics.orders.change}
            />
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <PercentIcon className="h-4 w-4 text-gray-500" />
                  CONVERSION
                </div>
              }
              value={formatPercent(metrics.conversion.value)}
              change={metrics.conversion.change}
            />
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="h-4 w-4 text-gray-500" />
                  TOTAL SALES VALUE
                </div>
              }
              value={formatCurrency(metrics.totalSales.value)}
              change={metrics.totalSales.change}
            />
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-gray-500" />
                  AVG ORDER VALUE
                </div>
              }
              value={formatCurrency(metrics.avgOrderValue.value)}
              change={metrics.avgOrderValue.change}
            />
            <MetricCard
              title={
                <div className="flex items-center gap-2">
                  <CoinsIcon className="h-4 w-4 text-gray-500" />
                  COMMISSION PAID
                </div>
              }
              value={formatCurrency(metrics.commission.value)}
              change={metrics.commission.change}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-10">
            <div className="col-span-3 md:col-span-4 lg:col-span-5">
              <InsightsChart />
            </div>
            <div className="col-span-3 md:col-span-2 lg:col-span-3">
              <ComparisonChart />
            </div>
            <div className="col-span-3 md:col-span-2 lg:col-span-2 h-full">
              <ForecastCard className="h-full" />
            </div>
          </div>

          {/* Orders Table */}
          <OrdersTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
