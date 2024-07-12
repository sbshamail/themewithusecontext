import React from "react";

interface Props {
  props?: React.ComponentPropsWithoutRef<"div">;
  className?: React.ComponentProps<"div">["className"];
  children: React.ReactNode;
  space?: "0" | "1" | "2";
  style?: React.CSSProperties;
}
const Shadow = ({ children, className, space, style, ...props }: Props) => {
  let spacing = "p-3";
  if (space === "0") {
    spacing = "!p-0 !py-0 !m-0";
  } else if (space === "1") {
    spacing = "p-4 py-10";
  } else if (space === "2") {
    spacing = "p-6 py-12";
  }
  return (
    <div
      className={` backdrop-blur-md bg-accent/50  text-card-foreground  shadow shadow-border ${spacing}  ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Shadow;
