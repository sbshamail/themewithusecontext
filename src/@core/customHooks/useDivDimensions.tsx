import { useCallback, useEffect, useRef, useState } from "react";
import useGetWindowInner from "./useGetWindowInner";

export interface dimensionProps {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const useDivDimensions = () => {
  const [dimension, setDimension] = useState<DOMRect | dimensionProps | null>(
    null
  );
  const divRef = useRef<HTMLDivElement>(null);
  const { width } = useGetWindowInner();

  const updateDimensions = useCallback(() => {
    if (divRef.current) {
      setDimension(divRef.current.getBoundingClientRect());
    }
  }, [divRef]);

  useEffect(() => {
    updateDimensions();
  }, [divRef, width]);

  return { dimension, divRef, width };
};

export default useDivDimensions;
