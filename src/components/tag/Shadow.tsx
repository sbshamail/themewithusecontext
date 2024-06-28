import React from "react";

interface Props {
  props?: React.ComponentPropsWithoutRef<"div">;
  className?: string;
  children: React.ReactNode;
  space?: string;
}
const Shadow = ({ children, className, space, ...props }: Props) => {
  if (space === "0") {
    space = "!p-0 !py-0 !m-0";
  } else if (space === "1") {
    space = "p-4 py-10";
  } else if (space === "2") {
    space = "p-6 py-12";
  }
  return (
    <div
      className={`bg-background  shadow shadow-ring p-3 ${space}  ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Shadow;
