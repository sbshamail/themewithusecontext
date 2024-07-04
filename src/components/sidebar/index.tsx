"use client";
import React, { FC, ReactNode, useState } from "react";
import Shadow from "../tag/Shadow";
import Sidebar from "./Sidebar";
import { sidebarContentType } from "./Sidebar";

const data: [sidebarContentType] = [
  {
    id: 1,
    title: "Dashboard",
    icon: "ic:baseline-dashboard",
    children: [
      {
        title: "Home",
        // icon: "material-symbols:circle",
        link: "/",
      },
      {
        title: "Main",
        // icon: "material-symbols:circle-outline",
        children: [
          {
            title: "Other",
            // icon: "material-symbols:circle",
            link: "/main",
          },
        ],
      },
    ],
  },
];

interface Props {
  isOpen: boolean;
  type?: "fixed" | "absolute";
  position?: "right" | "left";
  children?: ReactNode;
}

const Main: FC<Props> = ({ children, isOpen, type, position }) => {
  return (
    <Shadow
      space="0"
      className={`shadow-lg ${type || "absolute"} ${
        position === "right" ? "right-0" : "left-0"
      } top-0 h-full transition-transform transform w-64 ${
        isOpen
          ? position === "right"
            ? "translate-x-0"
            : "translate-x-0"
          : position === "right"
          ? "translate-x-[110%]"
          : "-translate-x-[110%]"
      } `}
    >
      <h2 className="p-4 text-xl">My Sidebar</h2>
      <Sidebar data={data} />
    </Shadow>
  );
};

export default Main;
