"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  Send,
  LayoutDashboardIcon,
  User,
  Settings,
  SendToBack,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import {useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideBar({}: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const width=useWindowWidth();
  const mobileWidth=width<768;
  return (
    <div className="border-r-2 border-blue-300 relative pt-24  shadow-xl shadow-blue-700 pb-10">
      {!mobileWidth&&<div className="absolute top-6 right-[-24px]">
        {collapsed ? (
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <ChevronLeft />
          </Button>
        ) : (
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <ChevronRight />
          </Button>
        )}
      </div>}
      <Nav
        isCollapsed={mobileWidth?true:collapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: LayoutDashboardIcon,
            variant: "default",
            href: "/",
          },
          {
            title: "User",
            label: "",
            icon: User,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            label: "",
            icon: SendToBack,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}
