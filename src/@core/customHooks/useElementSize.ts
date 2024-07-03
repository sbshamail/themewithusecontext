"use client";
// useElementSize.ts
import { useLayoutEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

interface Size {
  width: number;
  height: number;
}

export default function useElementSize(): any {
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

  useResizeObserver(target, (entry) => {
    if (entry.contentBoxSize) {
      const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
      setRoundedSize({ width, height });
    } else {
      // Fallback for browsers that don't support contentBoxSize
      const { width, height } = entry.contentRect;
      setRoundedSize({ width, height });
    }
  });

  return [target, size];
}
