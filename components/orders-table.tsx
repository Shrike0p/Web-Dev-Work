"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLinkIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { orders } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { useState, useMemo } from "react";

export function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const itemsPerPage = 5;

  // Debounce search term
  useMemo(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter and paginate orders
  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      order.product.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <CardTitle>Orders</CardTitle>
        <Input
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64"
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time spent</TableHead>
              <TableHead>Order Value</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.product}</TableCell>
                <TableCell>
                  {order.date}
                  <br />
                  <span className="text-sm text-muted-foreground">
                    {order.time}
                  </span>
                </TableCell>
                <TableCell>{order.timeSpent}</TableCell>
                <TableCell>{formatCurrency(order.value)}</TableCell>
                <TableCell>{formatCurrency(order.commission)}</TableCell>
                <TableCell className="flex justify-end items-center text-gray-400">
                  View In Chat
                  <Button variant="ghost" size="icon">
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center mt-6">
          {/* Pagination Controls */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Page <span className="font-bold">{currentPage}</span> of{" "}
            <span className="font-bold">{totalPages}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
