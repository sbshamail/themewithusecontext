import React, { FC } from "react";

interface HButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const HButton: FC<HButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`rounded border p-1 primary  ${className}  `} {...props}>
      {children}
    </button>
  );
};

export default HButton;
