"use client";
import { useState, RefObject, useEffect } from "react";
import useClickOutside from "./useClickOutside";

export interface UsePopOverReturn {
  divRef: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: (open: boolean) => void;
  dropdownPositionClass: string;
  dropdownLeftPositionClass: string;
  shouldOpenUpwards?: boolean;
}

export const usePopOver = (): UsePopOverReturn => {
  const [open, setOpen] = useState(false);
  const [dropdownPositionClass, setDropdownPositionClass] = useState("");
  const [dropdownLeftPositionClass, setDropdownLeftPositionClass] =
    useState("");
  const [shouldOpenUpwards, setShouldOpenUpwards] = useState(false);
  const toggle = () => {
    setOpen(false);
  };
  const divRef = useClickOutside(toggle);

  // Function to determine if dropdown should open upwards
  // const dropdownPositions = () => {
  //   if (divRef.current) {
  //     const dropdownRect = divRef.current.getBoundingClientRect();

  //     const viewportHeight =
  //       window.innerHeight || document.documentElement.clientHeight;
  //     const viewportWidth =
  //       window.innerWidth || document.documentElement.clientWidth;

  //     // Calculate if there's enough space below or above the input to accommodate the dropdown
  //     const spaceBelow = viewportHeight - dropdownRect.bottom;
  //     const spaceAbove = dropdownRect.top + dropdownRect.height;
  //     // Determine if the dropdown should open upwards when bottom is near 90% of the viewport height
  //     console.log(
  //       dropdownRect,
  //       window.outerHeight,
  //       screen.height,
  //       viewportHeight,
  //       viewportHeight * 0.8
  //     );
  //     // Calculate the percentage position of the bottom of the dropdown relative to the viewport height
  //     let bottomPercentage = (dropdownRect.top / screen.height) * 100;
  //     bottomPercentage = (bottomPercentage * 100) / 100 + 40;

  //     const shouldOpenUpwards = true;

  //     // Determine if the dropdown should open to the left or right
  //     const shouldOpenLeft = dropdownRect.right > viewportWidth / 2;

  //     return { shouldOpenUpwards, shouldOpenLeft };
  //   }
  //   return { shouldOpenUpwards: false, shouldOpenLeft: false };
  // };
  // const { shouldOpenUpwards, shouldOpenLeft } = dropdownPositions();
  // const dropdownPositionClass =
  //   shouldOpenUpwards === false ? "" : "top-auto bottom-full";

  // const dropdownLeftPositionClass =
  //   shouldOpenLeft === false ? " left-0" : " right-0";

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (divRef.current) {
        const dropdownRect = divRef.current.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth =
          window.innerWidth || document.documentElement.clientWidth;

        const spaceBelow = viewportHeight - dropdownRect.bottom;
        const spaceAbove = dropdownRect.top;
        const dropdownHeight = divRef.current.offsetHeight;

        // Determine if the dropdown should open upwards
        const shouldOpenUpwards =
          dropdownRect.bottom > viewportHeight * 0.8 ||
          spaceBelow < dropdownHeight;

        const shouldOpenLeft = dropdownRect.left > viewportWidth / 2;
        setShouldOpenUpwards(shouldOpenUpwards);
        setDropdownPositionClass(
          shouldOpenUpwards ? "top-auto bottom-full" : ""
        );
        setDropdownLeftPositionClass(shouldOpenLeft ? "right-0" : "left-0");
      }
    };
    // Update position on mount and when the dropdown opens

    updateDropdownPosition();

    // Optionally, add resize and scroll event listeners if the position needs to be updated dynamically
    window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("scroll", updateDropdownPosition);

    return () => {
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition);
    };
  }, [open]);

  return {
    divRef,
    open,
    setOpen,
    dropdownPositionClass,
    dropdownLeftPositionClass,
    shouldOpenUpwards,
  };
};
