"use client"
import PageTitle from "@/components/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  CreditCard,
  IndianRupee,
  LucideProps,
  User,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface CardProps {
  label: string;
  amount: string;
  description: string;
  icons: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
}

const cardContentData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "₹3000000",
    description: "200% from last year",
    icons: IndianRupee,
  },
  {
    label: "Subscription",
    amount: "+100000",
    description: "20% increase from previous month",
    icons: User,
  },
  {
    label: "Sales",
    amount: "↗30000",
    description: "This is the amount of sales",
    icons: CreditCard,
  },
  {
    label: "Sales",
    amount: "30000",
    description: "This is the amount of sales",
    icons: Activity,
  },
];

const chartsData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-2">
      <PageTitle title="Dashboard" />
      {/* cards */}
      <section className=" pt-8 grid w-full  gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {cardContentData.map((data, key) => (
          <Card key={key} className="shadow-md shadow-blue-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {data.label}
              </CardTitle>
              {/* Icon */}
              <data.icons className="w-6 h-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.amount}</div>
              <p className="text-xs text-muted-foreground">
                {data.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
      {/* charts */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-md shadow-blue-600">
          <CardHeader className="font-semibold text-gray-400">
            OverView
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chartsData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
            </CardContent>
         
        </Card>
        <Card className="shadow-md shadow-blue-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            Recent Sales
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}
