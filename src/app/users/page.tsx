"use client";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/ui/DataTable";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export type userData = {
  name: string;
  email: string;
  lastOrder: string;
  method: "Credit Card" | "UPI" | "Cash" | "Cancelled";
};

const imageList:string[] = ["Leo", "Cali", "Lola", "Charlie","Luna","Bob","Patches"];
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

const users: userData[] = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    lastOrder: getRandomDate(),
    method: "Credit Card",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.net",
    lastOrder: getRandomDate(),
    method: "UPI",
  },
  {
    name: "Charlie Brown",
    email: "charlie@domain.com",
    lastOrder: getRandomDate(),
    method: "Cash",
  },
  {
    name: "Diana Prince",
    email: "diana@sample.org",
    lastOrder: getRandomDate(),
    method: "Cancelled",
  },
  {
    name: "Ethan Hunt",
    email: "ethan@anothermail.com",
    lastOrder: getRandomDate(),
    method: "Credit Card",
  },
  {
    name: "Frank Castle",
    email: "frank@domain.com",
    lastOrder: getRandomDate(),
    method: 'Cancelled',
  },
  {
    name: "Grace Hopper",
    email: "grace@example.net",
    lastOrder: getRandomDate(),
    method: "UPI",
  },
  {
    name: "Harry Potter",
    email: "harry@sample.org",
    lastOrder: getRandomDate(),
    method: "Cash",
  },
  {
    name: "Irene Adler",
    email: "irene@anothermail.com",
    lastOrder: getRandomDate(),
    method: "Cancelled",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    lastOrder: getRandomDate(),
    method: "Credit Card",
  }
  
];

function generateRandomImage(): string {
  const randomIndex: number = Math.floor(Math.random() * imageList.length);
  const randomImage: string = imageList[randomIndex];
  return `https://api.dicebear.com/8.x/open-peeps/svg?seed=${randomImage}`;
}

export const columns: ColumnDef<userData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-1 gap-2">
        <Avatar className="h-9 w-9 rounded-xl mt-2 ml-1 bg-gray-300">
          <AvatarImage src={generateRandomImage()} alt="@shadcn" />
        </Avatar>
        <p>{row.getValue('name')}</p>
      </div>
    ),
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
    accessorKey: "method",
    header: "Method",
  },
];



type Props = {};

const Users = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <PageTitle title="Users" />
      {/* Data Table for Users... */}
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
