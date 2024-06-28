import React, { FC, ReactNode } from "react";
import { usePopOver } from "@/@core/customHooks/usePopOver";

interface PopOverProps {
  children: ReactNode;
}

export const PopOver: FC<PopOverProps> = ({ children }) => {
  const { divRef, open, setOpen, dropdownPositionClass } = usePopOver();
  return (
    <div className="relative" ref={divRef}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            setOpen,
            open,
            divRef,
            dropdownPositionClass,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface PopOverTriggerProps {
  children: ReactNode;
  divRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  dropdownPositionClass: string;
  setOpen: any;
}

export const PopOverTrigger: FC<Partial<PopOverTriggerProps>> = ({
  children,
  open,
  setOpen,
}) => {
  return (
    <div onClick={() => setOpen(!open)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            open,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

interface PopOverContentProps {
  children: ReactNode;
  divRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  dropdownPositionClass: string;
}

export const PopOverContent: FC<Partial<PopOverContentProps>> = ({
  children,
  open,
  dropdownPositionClass,
}) => {
  return open ? (
    <div>
      <div className={`absolute z-50 ${dropdownPositionClass}`}>
        <div className="">{children}</div>
      </div>
    </div>
  ) : null;
};
