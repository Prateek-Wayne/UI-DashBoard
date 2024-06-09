"use client";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/ui/DataTable";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export type settingDataType = {
  category: string;
  value: string;
};


const settingData: settingDataType[] = [
  {
    category:'Account',
    value:'on'
  },
  {
    category:'Notification',
    value:'off'
  },
  {
    category:'language',
    value:'en'
  },
  {
    category:'Backgroudn',
    value:'light'
  },
];



const columns: ColumnDef<settingDataType>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value",
  }
];


const Settings = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <PageTitle title="Orders" />
      {/* Data Table for Users... */}
      <div className="shadow-lg shadow-blue-500">
      <DataTable columns={columns} data={settingData} />
      </div>
    </div>
  );
};

export default Settings;
