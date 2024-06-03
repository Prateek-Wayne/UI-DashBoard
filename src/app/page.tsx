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

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-2">
      <PageTitle title="Dashboard" />
      {/* cards */}
      <section className=" pt-8 grid w-full  gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {cardContentData.map((data, key) => (
          <Card key={key}>
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            OverView
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            Recent Sales
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}
