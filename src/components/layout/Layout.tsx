import React, { useState, useRef } from "react";
import Sidebar from "../sidebar";
import HIconify from "../icon/HIconify";

interface Props {
  children: React.ReactNode;
  type?: "fixed" | "absolute";
  position?: "right" | "left";
  open?: boolean;
}
const Layout: React.FC<Props> = ({
  children,
  type,
  position = "left",
  open = true,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex min-h-screen relative">
      <Sidebar type={type} position={position} isOpen={isOpen} />
      <HIconify
        icon={`${
          isOpen
            ? position === "left"
              ? "mdi:hamburger-open"
              : "mdi:hamburger-close"
            : position === "left"
            ? "mdi:hamburger-close"
            : "mdi:hamburger-open"
        }`}
        fontSize={"1.5em"}
        onClick={toggleSidebar}
        className={`top-0  ${type} ${
          isOpen ? (position === "left" ? "ml-64 " : "me-64 ") : ""
        } ${position === "left" ? "left-0" : "right-0"} iconPrimary `}
      >
        {isOpen ? "Hide Sidebar" : "Show Sidebar"}
      </HIconify>
      <div
        className={`flex-1 transition-all duration-300  ${
          isOpen ? (position === "left" ? "ml-72" : "me-72") : ""
        }`}
      >
        <main className=" ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
