import React, { FC, ReactNode } from "react";
import Shadow from "../tag/Shadow";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: FC<Props> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64`}
    >
      <button onClick={toggleSidebar} className="p-4 focus:outline-none">
        Close
      </button>
      <h2 className="p-4 text-xl">My Sidebar</h2>
    </div>
  );
};

export default Sidebar;
