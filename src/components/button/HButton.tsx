import React, { FC } from "react";
import { useTheme } from "@/utils/useContext/themeChange/themeChangeContext";

interface HButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const HButton: FC<HButtonProps> = ({ children, className, ...props }) => {
  const { theme } = useTheme();
  // console.log(theme);
  const { primary } = theme;
  let bgName = `bg-${theme.foreground}`;
  // console.log(bgName);
  return (
    <button
      // style={{
      //   background: theme.primary,
      //   color: theme.foreground,
      //   borderColor: theme.foreground,
      //   boxShadow: `0 25px 50px -12px ${theme.primary}`,
      // }}
      className={`rounded border shadow p-1 ${bgName}  text-${theme.foreground} border-${theme.foreground} shadow-2xl shadow-${theme.primary} ${className}  `}
      {...props}
    >
      {children}
    </button>
  );
};

export default HButton;
