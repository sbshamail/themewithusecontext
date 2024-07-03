"use client";
import useElementSize from "@/@core/customHooks/useElementSize";
import React, { FC, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  props?: React.ComponentPropsWithoutRef<"div">;
  className?: React.ComponentProps<"div">["className"];
}
const ResizeDiv: FC<Props> = ({ children, className, ...props }) => {
  const [gridClass, setGridClass] = useState("grid-cols-1");
  const [boxRef, { width }] = useElementSize();
  useEffect(() => {
    if (width >= 1200) {
      setGridClass("grid-cols-4");
    } else if (width >= 640) {
      setGridClass("grid-cols-2");
    } else {
      setGridClass("grid-cols-1");
    }
  }, [width]);
  return (
    <div
      ref={boxRef}
      {...props}
      className={`max-w-full w-full grid ${gridClass} gap-4 ${className} `}
    >
      {children}
    </div>
  );
};

export default ResizeDiv;
