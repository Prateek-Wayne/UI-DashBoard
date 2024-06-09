"use client";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/ui/DataTable";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export type orderData = {
  orderId: string;
  email: string;
  lastOrder: string;
  status: "Completed" | "Processing" | "Pending" ;
};

function getRandomDate(): string {
  const start = new Date();
  const end = new Date();
  start.setFullYear(start.getFullYear() - 1);

  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // Format the date as 'Fri Aug 11 2023'
  return randomDate.toDateString();
}


const orderData: orderData[] = [
  {
    orderId: "ORD001",
    email: "frank@domain.com",
    lastOrder: getRandomDate(),
    status: "Completed",
  },
  {
    orderId: "ORD002",
    email: "grace@example.net",
    lastOrder: getRandomDate(),
    status: "Processing",
  },
  {
    orderId: "ORD003",
    email: "harry@sample.org",
    lastOrder: getRandomDate(),
    status: "Pending",
  },
  {
    orderId: "ORD004",
    email: "irene@anothermail.com",
    lastOrder: getRandomDate(),
    status: "Completed",
  },
  {
    orderId: "ORD005",
    email: "john@example.com",
    lastOrder: getRandomDate(),
    status: "Processing",
  }
];



export const columns: ColumnDef<orderData>[] = [
  {
    accessorKey: "orderId",
    header: "OrderId"
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => (
      <div className={cn("p-2 font-medium w-fit  rounded-lg",{
        "bg-red-300":row.getValue('status')==='Pending',
        "bg-orange-300":row.getValue('status')==='Processing',
        "bg-green-300":row.getValue('status')==='Completed'
        
        })}>
      {row.getValue('status')}        
      </div>
    ),
  },
];


const Orders = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <PageTitle title="Orders" />
      {/* Data Table for Users... */}
      <div className="shadow-lg shadow-blue-500">
      <DataTable columns={columns} data={orderData} />
      </div>
    </div>
  );
};

export default Orders;
