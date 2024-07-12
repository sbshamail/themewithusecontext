"use client";
import React from "react";
import { useTheme } from "@/utils/useContext/themeChange/themeChangeContext";
import { borderRadiusType } from "@/utils/useContext/themeChange/interface";
const BorderRadius = () => {
  const { setRadius } = useTheme();
  const borderRadiusValues: borderRadiusType[] = [
    "0.1em",
    "0.2em",
    "0.3em",
    "0.4em",
    "0.5em",
    "0.6em",
    "0.7em",
    "0.8em",
    "0.9em",
    "1em",
  ];
  return (
    <div
      className="flex flex-wrap items-center space-x-1"
      style={{
        display: "flex",
        margin: "0 auto",
      }}
    >
      {borderRadiusValues.map((item, index) => (
        <div key={index} onClick={() => setRadius(item)}>
          <div className="border rounded-full p-2 h-auto w-10 text-center cursor-pointer accent-foreground hover:accent">
            {item.slice(0, -2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorderRadius;
