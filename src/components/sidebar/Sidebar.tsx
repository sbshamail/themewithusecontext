"use client";
import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import HIconify from "../icon/HIconify";
import { usePathname } from "next/navigation";

export interface sidebarContentType {
  id?: any;
  link?: string;
  title: string;
  children?: any[];
  icon?: string;
  iconColor?: string;
}
interface itemComponentsProps {
  item: sidebarContentType;
  isOpen: boolean;
  onClick: () => void;
  child?: boolean;
  children: ReactNode;
  pathname: string;
}
const ItemComponent: FC<itemComponentsProps> = ({
  item,
  isOpen,
  onClick,
  child,
  children,
  pathname,
}) => {
  let Container: any;
  if (item.link) {
    Container = Link;
  } else {
    Container = "div";
  }
  return (
    <Container href={item.link} className={`no-underline`}>
      <div
        className={`flex items-center justify-between p-2 cursor-pointer ${
          isOpen && !item.link ? " bg-primary/20" : ""
        }
        ${pathname === item.link ? "bg-accent text-primary" : ""}
        `}
        onClick={() => onClick(item.title)}
      >
        <div className="flex items-center space-x-2">
          <HIconify
            fontSize={item.children ? (child ? "1.3em" : "1.5em") : "1em"}
            className={isOpen && !item.link ? "iconPrimary" : "text-foreground"}
            icon={
              item.icon
                ? item.icon
                : item.children
                ? "material-symbols:circle-outline"
                : "material-symbols:circle"
            }
          />
          <h4>{item.title}</h4>
        </div>
        {item.children && (
          <HIconify
            fontSize={"1.5em"}
            className={isOpen ? "iconPrimary" : ""}
            icon={
              isOpen
                ? "material-symbols:keyboard-arrow-down"
                : "material-symbols:keyboard-arrow-right"
            }
          />
        )}
      </div>
      {isOpen && children && <div className="ml-2">{children}</div>}
    </Container>
  );
};

interface Props {
  data: [sidebarContentType];
}
const Sidebar: FC<Props> = ({ data }) => {
  const [openItems, setOpenItems] = useState([]);

  const pathname = usePathname();
  console.log(pathname);
  const handleToggle = (str: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(str)
        ? prevOpenItems.filter((itemStr) => itemStr !== str)
        : [...prevOpenItems, str]
    );
  };
  const renderItems = (items: [sidebarContentType], child?: boolean) => {
    return items.map((item) => (
      <ItemComponent
        key={item.title}
        item={item}
        isOpen={openItems.includes(item.title)}
        child={child}
        onClick={handleToggle}
        pathname={pathname}
      >
        {item.children && renderItems(item.children, true)}
      </ItemComponent>
    ));
  };

  return (
    <div className="w-full mt-6 ">
      <div className="mx-6">{renderItems(data)}</div>
    </div>
  );
};

export default Sidebar;
