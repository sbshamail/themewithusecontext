import { useEffect, useRef } from "react";

const useClickOutside = (toggle: () => void) => {
  const divRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      toggle();
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return divRef;
};

export default useClickOutside;
