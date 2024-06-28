"use client";
import { useEffect, useState, useRef, RefObject, KeyboardEvent } from "react";
import useClickOutside from "./useClickOutside";

interface UsePopOverReturn {
  divRef: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: (open: boolean) => void;
  dropdownPositionClass: string;
}

export const usePopOver = (): UsePopOverReturn => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(false);
  };
  const divRef = useClickOutside(toggle);

  // Function to determine if dropdown should open upwards
  const dropdownShouldOpenUpwards = () => {
    if (divRef.current) {
      const dropdownRect = divRef.current.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Calculate if there's enough space below or above the input to accommodate the dropdown
      const spaceBelow = viewportHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      // If there's not enough space below and more space above, open upwards
      return (
        spaceBelow < dropdownRect.height && spaceAbove >= dropdownRect.height
      );
    }
    return false;
  };
  const dropdownPositionClass =
    dropdownShouldOpenUpwards() === false
      ? "bottom-auto top-full"
      : "top-auto bottom-full";

  return {
    divRef,
    open,
    setOpen,
    dropdownPositionClass,
  };
};
