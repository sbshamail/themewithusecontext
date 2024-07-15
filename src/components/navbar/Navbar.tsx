"use client";
import React, { useEffect, useState } from "react";
import ToggleMode from "../switchThemeButton/ToggleMode";
import BorderRounded from "../switchThemeButton/BorderRadius";
import useGetWindowInnerWidth from "@/@core/customHooks/useGetWindowInner";

import Shadow from "../tag/Shadow";
import useDivDimensions from "@/@core/customHooks/useDivDimensions";
interface Props {
  isOpen: boolean;
  position: "left" | "right";
}
const Navbar = ({ isOpen, position }: Props) => {
  const { dimension, divRef, width } = useDivDimensions();

  // let newWidth =
  //   (isOpen && position === "left") || position === "right"
  //     ? width - (dimension?.x || 0) // Ensure dimension.x is not undefined
  //     : width;

  // // Ensure newWidth is not NaN
  // if (isNaN(newWidth)) {
  //   newWidth = width; // Or set to a default value
  // }

  return (
    <div style={{ height: dimension?.bottom, marginBottom: dimension?.y }}>
      <Shadow
        style={{ width: isOpen ? `calc(100% - 256px)` : "100%" }}
        className={`fixed top-0 ${
          isOpen && position === "left" ? "left-64" : "left-0"
        } shadow-md z-navbar p-4 transition-all duration-300`}
      >
        <div ref={divRef}>
          <div className="flex max-h-max justify-between flex-wrap items-center space-y-2">
            <h1 className="text-3xl font-bold">LOGO</h1>
            <div className="flex flex-wrap items-center space-y-2 space-x-4">
              <BorderRounded />
              <ToggleMode />
            </div>
          </div>
        </div>
      </Shadow>
    </div>
  );
};

export default Navbar;
