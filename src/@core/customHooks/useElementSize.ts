// useElementSize.ts
import { useLayoutEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

interface Size {
  width: number;
  height: number;
}

export default function useElementSize(): [
  React.RefObject<HTMLDivElement>,
  Size
] {
  const target = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const setRoundedSize = ({ width, height }: Size) => {
    setSize({ width: Math.round(width), height: Math.round(height) });
  };

  useLayoutEffect(() => {
    if (target.current) {
      setRoundedSize(target.current.getBoundingClientRect());
    }
  }, [target]);

  // Ensure useResizeObserver is only executed on the client-side
  if (typeof window !== "undefined") {
    useResizeObserver(target, (entry) => {
      if (entry.contentBoxSize) {
        const { inlineSize: width, blockSize: height } =
          entry.contentBoxSize[0];
        setRoundedSize({ width, height });
      } else {
        // Fallback for browsers that don't support contentBoxSize
        const { width, height } = entry.contentRect;
        setRoundedSize({ width, height });
      }
    });
  }

  return [target, size];
}

//useLayoutEffect: It ensures that the effect runs synchronously after all DOM mutations, preventing visual inconsistencies that might occur if it ran later.
// useEffect: on the other hand, runs asynchronously. It schedules its callback to run after the browser has painted any updates to the screen, meaning it runs after the component has rendered.

//async is faster than sync
