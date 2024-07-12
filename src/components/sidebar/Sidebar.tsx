"use client";
import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";
import HIconify from "../icon/HIconify";
import { usePathname } from "next/navigation";
import { SidebarContentType } from "./interface";
import useCustomPathName from "@/@core/customHooks/getPathName";

interface itemComponentsProps {
  item: SidebarContentType;
  isOpen: boolean;
  onClick: (str: string) => void;
  child?: boolean;
  children: ReactNode;
  pathname?: string | null;
  isChildMatch: boolean;
}
const ItemComponent: FC<itemComponentsProps> = ({
  item,
  isOpen,
  onClick,
  children,
  pathname,
  isChildMatch,
}) => {
  let Container: any;
  if (item.link) {
    Container = Link;
  } else {
    Container = "div";
  }

  const isMatch = pathname === item.link || isChildMatch;

  // Prevent child clicks from closing the parent
  const handleItemClick = (e: React.MouseEvent) => {
    if (!item.link) {
      onClick(item.title);
      e.stopPropagation();
    }
  };

  return (
    <Container href={item.link || "#"} className={`no-underline`}>
      <div
        className={`flex items-center justify-between p-2 cursor-pointer ${
          isOpen && !item.link ? "bg-effect-md" : ""
        }
        ${pathname === item.link ? "bg-effect-xl " : "bg-effect"}
           text-accent-foreground hover:bg-effect-xl
        `}
        onClick={(e) => handleItemClick(e)}
      >
        <div className="flex items-center space-x-2 drop-shadow-2xl filter ">
          <HIconify
            fontSize={item.id ? "1.5em" : "1.3em"}
            className={` 
              ${
                isOpen && !item.link
                  ? "text-primary/90"
                  : isMatch
                  ? "text-primary"
                  : "text-muted-foreground "
              }`}
            icon={
              item.icon
                ? item.icon
                : item.children
                ? "material-symbols:circle-outline"
                : "material-symbols:circle"
            }
          />
          <p className="m-0 p-0">{item.title}</p>
        </div>
        {item.children && (
          <HIconify
            fontSize={"1.5em"}
            className={isOpen ? "iconPrimary" : "text-muted-foreground "}
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
  data: SidebarContentType[];
}

// Main Fuction
const Sidebar: FC<Props> = ({ data }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const pathname = useCustomPathName();
  const handleToggle = (str: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(str)
        ? prevOpenItems.filter((itemStr) => itemStr !== str)
        : [...prevOpenItems, str]
    );
  };

  const checkMatch = (
    item: SidebarContentType,
    pathname: string | null
  ): boolean => {
    if (item.link === pathname) {
      return true;
    }
    return item.children
      ? item.children.some((child) => checkMatch(child, pathname))
      : false;
  };

  const renderItems = (items: SidebarContentType[]): ReactNode => {
    return items.map((item) => {
      const isChildMatch = item.children?.some((child) =>
        checkMatch(child, pathname)
      );

      return (
        <ItemComponent
          key={item.title}
          item={item}
          isOpen={openItems.includes(item.title)}
          onClick={handleToggle}
          pathname={pathname}
          isChildMatch={isChildMatch || false}
        >
          {item.children && (
            <div className="flex flex-col mt-1 space-y-2">
              {renderItems(item.children)}
            </div>
          )}
        </ItemComponent>
      );
    });
  };

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col mx-6 space-y-3">{renderItems(data)}</div>
    </div>
  );
};

export default Sidebar;
