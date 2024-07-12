import React from "react";
import ToggleMode from "../switchThemeButton/ToggleMode";
import BorderRounded from "../switchThemeButton/BorderRadius";
import useGetWindowInnerWidth from "@/@core/customHooks/useGetWindowInnerWidth";

import Shadow from "../tag/Shadow";
import useDivDimensions from "@/@core/customHooks/useDivDimensions";
interface Props {
  isOpen: boolean;
  position: "left" | "right";
}
const Navbar = ({ isOpen, position }: Props) => {
  const { dimension, divRef } = useDivDimensions();
  const { width } = useGetWindowInnerWidth();
  // console.log(dimension);
  let newWidth =
    (isOpen && position === "left") || position === "right"
      ? width - dimension.x
      : width;
  return (
    <div style={{ marginBottom: dimension.bottom }}>
      <Shadow
        style={{ width: newWidth }}
        className={`fixed top-0 max-h-max ${
          isOpen && position === "left" ? "left-64" : "left-0"
        }  shadow-md  z-navbar m-auto p-4 transition-all duration-300`}
      >
        <div
          ref={divRef}
          className="flex max-h-max flex-wrap items-center justify-between space-y-2"
        >
          <h1 className="text-3xl font-bold">LOGO</h1>
          <div className="flex flex-wrap items-center space-y-2 space-x-4">
            <BorderRounded />
            <ToggleMode />
          </div>
        </div>
      </Shadow>
    </div>
  );
};

export default Navbar;
