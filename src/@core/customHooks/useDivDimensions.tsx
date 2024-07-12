import { useCallback, useEffect, useRef, useState } from "react";

const useDivDimensions = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<DOMRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    toJSON: () => ({}),
  });

  const handleResize = useCallback(() => {
    if (divRef.current) {
      setDimension(divRef.current.getBoundingClientRect());
    }
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
  return { dimension, divRef };
};

export default useDivDimensions;
