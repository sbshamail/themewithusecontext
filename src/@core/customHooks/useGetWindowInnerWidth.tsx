"use client";
import { useCallback, useEffect, useState } from "react";

interface returnProps {
  width: number;
}
const useGetWindowInnerWidth = (): returnProps => {
  const [width, setWidth] = useState<number>(0);

  const handleResize = useCallback(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);
      handleResize(); // Check on initial render
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleResize]);

  return { width };
};

export default useGetWindowInnerWidth;

// handleResize Function: This function checks the window's width. If the width is 976px or less and the sidebar is open, it sets isOpen to false.
// useEffect Hook: This hook adds the resize event listener to the window on component mount and removes it on unmount. It also checks the initial window size to set the correct sidebar state.
// useCallback Hook: This ensures that the handleResize function does not get re-created on every render, which can lead to performance issues.
