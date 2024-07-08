"use client";
import React from "react";
import { useTheme } from "@/utils/useContext/themeChange/themeChangeContext";
const BorderRadius = () => {
  const { setRadius } = useTheme();
  return (
    <div
      className="flex items-center flex-wrap space-x-1"
      style={{
        display: "flex",
        margin: "0 auto",
      }}
    >
      {["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"].map(
        (item, index) => (
          <div key={index} onClick={() => setRadius(item)}>
            <div className="border rounded-full p-2 h-auto w-10 text-center cursor-pointer accent-foreground hover:accent">
              {item}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BorderRadius;
