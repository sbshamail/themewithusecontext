import React, { FC } from "react";

interface HButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  props?: React.ComponentPropsWithoutRef<"button">;
  size?: string;
}

const HButton: FC<HButtonProps> = ({ children, className, size, ...props }) => {
  if (size === "1") {
    size = "px-4 p-1";
  } else if (size === "2") {
    size = "px-4 p-2";
  }
  return (
    <button
      className={`rounded border px-1 primary ${size} ${className}  `}
      {...props}
    >
      {children}
    </button>
  );
};

export default HButton;
