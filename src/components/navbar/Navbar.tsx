import React from "react";
import SwitchThemeButton from "../switchThemeButton.tsx/SwitchThemeButton";
import ToggleMode from "../switchThemeButton.tsx/ToggleMode";
const Navbar = () => {
  return (
    <div className={` p-2`}>
      <div className="flex justify-between">
        <h1 className={` text-3xl font-bold`}>LOGO</h1>
        <div className="flex space-x-2">
          <ToggleMode />
          <SwitchThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
