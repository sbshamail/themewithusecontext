import React from "react";
import SwitchThemeButton from "../switchThemeButton/SwitchThemeButton";
import ToggleMode from "../switchThemeButton/ToggleMode";
import BorderRounded from "../switchThemeButton/BorderRadius";
const Navbar = () => {
  return (
    <div className={`w-full p-2`}>
      <div className="flex flex-wrap space-y-2 justify-between">
        <h1 className={` text-3xl font-bold`}>LOGO</h1>
        <div className="flex flex-wrap items-center space-x-2">
          <BorderRounded />
          <ToggleMode />
          {/* <SwitchThemeButton /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
