"use client";
import { useEffect, useState, useRef, RefObject, KeyboardEvent } from "react";

interface Props {
  list: Array<{ [key: string]: any }>;
  idName: string;
  idField: string;
  value: any;
  setValue: (value: any) => void;
}
interface UseIdSelectReturn {
  divRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  open: boolean;
  setOpen: (open: boolean) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  filteredList: Array<{ [key: string]: any }>;
  inputValue: string;
  handleInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  dropdownPositionClass: string;
}

export const useIdSelect = ({
  list,
  idName,
  idField,
  value,
  setValue,
}: Props): UseIdSelectReturn => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to determine if dropdown should open upwards
  const dropdownShouldOpenUpwards = () => {
    if (divRef.current && inputRef.current) {
      const dropdownRect = divRef.current.getBoundingClientRect();
      const inputRect = inputRef.current.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Calculate if there's enough space below or above the input to accommodate the dropdown
      const spaceBelow = viewportHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;

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

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      if (list.some((item) => item[idName] !== searchTerm)) {
        setSearchTerm("");
      }
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // show filter value from input
  const filteredList = searchTerm
    ? list.filter((item) =>
        item[idName]?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )
    : list;

  const selectedItem = list.find((item) => item[idField] === value);
  //show input value
  const inputValue = selectedItem ? selectedItem[idName] : "";

  // keyboard event on down key
  const handleKeyDown = (event: globalThis.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredList.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredList.length - 1
      );
    } else if (event.key === "Enter" && highlightedIndex !== -1) {
      event.preventDefault(); // Prevent default behavior of the Enter key
      setValue(filteredList[highlightedIndex][idField]);
      setSearchTerm("");
      setOpen(false);
      event.stopPropagation(); // Stop propagation of the event to prevent affecting other buttons or form submissions
    } else if (event.key === "Escape" || (event.key === "Tab" && open)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, highlightedIndex, filteredList]);

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " " && !open) {
      setOpen(true);
    }
  };

  return {
    divRef,
    inputRef,
    // states
    open,
    setOpen,
    searchTerm,
    highlightedIndex,
    setHighlightedIndex,
    setSearchTerm,
    filteredList,
    inputValue,
    handleInputKeyDown,
    dropdownPositionClass,
  };
};
