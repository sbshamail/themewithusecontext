import React, { useState, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : ""
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 bg-blue-600 text-white rounded"
        >
          {isOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <main ref={divRef} className="mt-8 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
