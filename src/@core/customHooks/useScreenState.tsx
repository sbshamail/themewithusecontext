"use client";
import { useEffect, useState, useRef } from "react";
import useGetWindowInnerWidth from "./useGetWindowInner";
interface Props {
  open: boolean;
  defaultWidth?: number;
}
interface returnProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  toggleSidebar: () => void;
}
const useScreenState = ({ open, defaultWidth = 976 }: Props): returnProps => {
  const { width } = useGetWindowInnerWidth();
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const prevWidthRef = useRef(width);

  useEffect(() => {
    if (typeof window !== undefined && width) {
      if (
        width <= defaultWidth &&
        prevWidthRef.current > defaultWidth &&
        isOpen
      ) {
        setIsOpen(false);
      } else if (width > defaultWidth) {
        setIsOpen(true);
      }
    }
    prevWidthRef.current = width;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultWidth, width]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, setIsOpen, toggleSidebar };
};

export default useScreenState;
