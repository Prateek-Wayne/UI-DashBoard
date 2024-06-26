import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen flex',inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        {/* SideBar of Dashboard  */}
        <SideBar/>
        {/* Main Page of Dashboard  */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
